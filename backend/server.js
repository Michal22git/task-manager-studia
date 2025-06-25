// Task Manager - Backend Server z Express.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

console.log('Task Manager Backend - Server starting...');

// Middleware
app.use(express.json());
app.use(express.static('.'));

// Health check endpoint
app.get('/health', (req, res) => {
    const healthCheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now(),
        service: 'task-manager',
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development'
    };
    
    res.status(200).json(healthCheck);
});

// In-memory storage dla tasks (w produkcji byłaby baza danych)
let tasks = [
    {
        id: 1,
        title: 'Ukończ Lab 3 DevOps',
        description: 'Implementacja CI/CD z Docker i GitHub Actions',
        status: 'completed',
        priority: 'high',
        createdAt: new Date('2024-06-22').toISOString()
    },
    {
        id: 2,
        title: 'Napisz dokumentację API',
        description: 'Dokumentacja REST API dla Task Manager',
        status: 'in-progress',
        priority: 'medium', 
        createdAt: new Date('2024-06-23').toISOString()
    }
];

// API endpoints
app.get('/api/tasks', (req, res) => {
    res.json({ 
        tasks: tasks,
        count: tasks.length,
        timestamp: new Date().toISOString()
    });
});

app.post('/api/tasks', (req, res) => {
    const { title, description, priority = 'medium' } = req.body;
    
    if (!title || !description) {
        return res.status(400).json({ 
            error: 'Title and description are required' 
        });
    }
    
    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        status: 'todo',
        priority,
        createdAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    
    res.status(201).json({
        message: 'Task created successfully',
        task: newTask
    });
});

app.put('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description, status, priority } = req.body;
    
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    
    // Update task
    if (title) tasks[taskIndex].title = title;
    if (description) tasks[taskIndex].description = description;
    if (status) tasks[taskIndex].status = status;
    if (priority) tasks[taskIndex].priority = priority;
    tasks[taskIndex].updatedAt = new Date().toISOString();
    
    res.json({
        message: 'Task updated successfully',
        task: tasks[taskIndex]
    });
});

app.delete('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    
    const deletedTask = tasks.splice(taskIndex, 1)[0];
    
    res.json({
        message: 'Task deleted successfully',
        task: deletedTask
    });
});

app.get('/api/status', (req, res) => {
    res.json({
        status: 'running',
        services: {
            database: 'connected',
            cache: 'connected'
        },
        metrics: {
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            cpu: process.cpuUsage()
        }
    });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Task Manager Backend running on port ${PORT}`);
    console.log(`🔗 Health check: http://localhost:${PORT}/health`);
    console.log(`🔗 API Status: http://localhost:${PORT}/api/status`);
}); 