// Task Manager - Frontend
console.log('Task Manager App - Frontend loaded');

// Podstawowa funkcjonalność będzie dodana w Lab 2
const taskManager = {
    tasks: [],
    
    init() {
        console.log('Task Manager initialized');
    }
};

// Inicjalizacja po załadowaniu DOM
document.addEventListener('DOMContentLoaded', function() {
    taskManager.init();
}); 