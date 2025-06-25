# Task Manager - Multi-stage Docker build
# Używamy Node.js jako base image
FROM node:18-alpine AS base

# Ustawiamy working directory
WORKDIR /app

# Kopiujemy package.json i instalujemy zależności
COPY package*.json ./
RUN npm install

# Kopiujemy kod źródłowy
COPY . .

# Otwieramy port dla aplikacji
EXPOSE 3000

# Komenda startowa - uruchamiamy backend Express który serwuje również pliki statyczne
CMD ["node", "backend/server.js"]

# Metadata
LABEL maintainer="Michal <michal@example.com>"
LABEL version="1.0"
LABEL description="Task Manager - aplikacja studencka DevOps" 