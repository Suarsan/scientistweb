# Etapa 1: Construcción
FROM node:18-alpine AS build
WORKDIR /app

# Instalar dependencias y construir el proyecto
COPY package*.json ./
RUN npm install
COPY . .

# Etapa 2: Servidor
FROM node:18-alpine
WORKDIR /app

# Copiar archivos al contenedor
COPY --from=build /app ./
COPY package*.json ./

# Instalar dependencias para producción
RUN npm install --production

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]
