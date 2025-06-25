# Task Manager

Aplikacja webowa do zarządzania zadaniami z pełnym workflow DevOps.
Projekt zaliczeniowy - Narzędzia do automatyzacji budowy oprogramowania.

## Opis

Kompletna aplikacja Task Manager implementująca najlepsze praktyki DevOps. Projekt obejmuje frontend z interaktywnym interfejsem, backend API, konteneryzację Docker, CI/CD pipeline oraz monitoring aplikacji.

## Architektura

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js z REST API
- **Baza danych**: MongoDB z Redis cache
- **Proxy**: Nginx z load balancing
- **Konteneryzacja**: Docker, Docker Compose
- **CI/CD**: GitHub Actions
- **Monitoring**: Health checks, API metrics
- **Testy**: Jest testing framework

## Funkcjonalność

### Zarządzanie zadaniami
- Dodawanie nowych zadań z opisem i priorytetem
- Zmiana statusu zadań (todo, in-progress, completed)
- Edycja i usuwanie zadań
- Wyświetlanie metadanych (data utworzenia, aktualizacji)

### API Endpoints
- GET /api/tasks - pobieranie listy zadań
- POST /api/tasks - tworzenie nowego zadania
- PUT /api/tasks/:id - aktualizacja zadania
- DELETE /api/tasks/:id - usuwanie zadania
- GET /health - health check aplikacji
- GET /api/status - metryki systemu

### DevOps Pipeline
- Automatyczne testy przy każdym push
- Budowanie obrazów Docker
- Security scanning z Trivy
- Deployment staging i production
- Code quality checks

## Instalacja

### Wymagania
- Docker i Docker Compose
- Git
- Node.js 18+ (opcjonalne, do developmentu)

### Uruchomienie
```bash
git clone https://github.com/Michal22git/task-manager-studia.git
cd task-manager-studia
docker-compose up -d
```

### Dostęp do aplikacji
- Aplikacja: http://localhost
- API: http://localhost/api
- MongoDB: localhost:27017
- Redis: localhost:6379

### Development
```bash
npm install
npm test
npm start
```

## Licencja
MIT License
