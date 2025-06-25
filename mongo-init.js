// MongoDB inicjalizacja dla Task Manager
db = db.getSiblingDB('taskmanager');

// Tworzenie kolekcji użytkowników
db.createCollection('users');

// Tworzenie kolekcji zadań
db.createCollection('tasks');

// Dodanie przykładowych danych
db.users.insertMany([
    {
        _id: ObjectId(),
        username: 'admin',
        email: 'admin@taskmanager.com',
        password: 'hashed_password_123',
        role: 'admin',
        createdAt: new Date()
    },
    {
        _id: ObjectId(),
        username: 'user1',
        email: 'user1@example.com',
        password: 'hashed_password_456',
        role: 'user',
        createdAt: new Date()
    }
]);

db.tasks.insertMany([
    {
        _id: ObjectId(),
        title: 'Ukończ Lab 3',
        description: 'Implementacja CI/CD z Docker i GitHub Actions',
        status: 'in-progress',
        priority: 'high',
        assignedTo: 'admin',
        createdAt: new Date(),
        dueDate: new Date('2024-06-23')
    },
    {
        _id: ObjectId(),
        title: 'Napisz dokumentację',
        description: 'Dokumentacja API dla Task Manager',
        status: 'todo',
        priority: 'medium',
        assignedTo: 'user1',
        createdAt: new Date(),
        dueDate: new Date('2024-06-25')
    }
]);

// Utworzenie indeksów dla wydajności
db.tasks.createIndex({ "assignedTo": 1 });
db.tasks.createIndex({ "status": 1 });
db.tasks.createIndex({ "createdAt": -1 });
db.users.createIndex({ "email": 1 }, { unique: true });

print('✅ MongoDB Task Manager - inicjalizacja zakończona pomyślnie!'); 