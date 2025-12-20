# Usar una imagen ligera de Node.js
FROM node:20-slim

# Directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de Vite
EXPOSE 3000

# Comando para desarrollo
CMD ["npm", "run", "dev", "--", "--host"]
