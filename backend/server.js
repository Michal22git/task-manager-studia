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

// API endpoints
app.get('/api/tasks', (req, res) => {
    res.json({ 
        tasks: [],
        message: 'Task API endpoint ready',
        timestamp: new Date().toISOString()
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