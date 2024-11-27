# Usar una imagen base de Node.js
FROM node:18

# Crear un directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos del proyecto al contenedor
COPY package*.json ./

# Instalar las dependencias de Node.js
RUN npm install


# Copiar todo el código fuente al contenedor
COPY . .

# Exponer el puerto en el que la aplicación estará escuchando
EXPOSE 3006

# Definir el comando para iniciar la aplicación
CMD ["node", "index.js"]

