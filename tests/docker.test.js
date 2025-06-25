// Testy integracyjne dla Docker i aplikacji
const { execSync } = require('child_process');

describe('Docker Integration Tests', () => {
    test('should have valid Dockerfile', () => {
        // Sprawdzamy czy Dockerfile istnieje
        const fs = require('fs');
        expect(fs.existsSync('Dockerfile')).toBe(true);
        
        // Sprawdzamy podstawowe instrukcje w Dockerfile
        const dockerfile = fs.readFileSync('Dockerfile', 'utf8');
        expect(dockerfile).toContain('FROM node:18-alpine');
        expect(dockerfile).toContain('WORKDIR /app');
        expect(dockerfile).toContain('EXPOSE 3000');
    });

    test('should have valid docker-compose.yml', () => {
        const fs = require('fs');
        expect(fs.existsSync('docker-compose.yml')).toBe(true);
        
        const dockerCompose = fs.readFileSync('docker-compose.yml', 'utf8');
        expect(dockerCompose).toContain('version:');
        expect(dockerCompose).toContain('services:');
        expect(dockerCompose).toContain('app:');
        expect(dockerCompose).toContain('mongo:');
        expect(dockerCompose).toContain('redis:');
    });

    test('should have proper .dockerignore', () => {
        const fs = require('fs');
        expect(fs.existsSync('.dockerignore')).toBe(true);
        
        const dockerignore = fs.readFileSync('.dockerignore', 'utf8');
        expect(dockerignore).toContain('node_modules');
        expect(dockerignore).toContain('.git');
        expect(dockerignore).toContain('*.log');
    });

    test('should validate package.json scripts', () => {
        const pkg = require('../package.json');
        expect(pkg.scripts).toHaveProperty('test');
        expect(pkg.scripts).toHaveProperty('start');
        expect(pkg.devDependencies).toHaveProperty('jest');
    });
}); 