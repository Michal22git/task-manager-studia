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

# Instalujemy http-server globalnie dla serwowania plików statycznych
RUN npm install -g http-server

# Komenda startowa - uruchamiamy backend i frontend jednocześnie
CMD ["sh", "-c", "node backend/server.js & http-server . -p 3000 -c-1"]

# Metadata
LABEL maintainer="Michal <michal@example.com>"
LABEL version="1.0"
LABEL description="Task Manager - aplikacja studencka DevOps" 