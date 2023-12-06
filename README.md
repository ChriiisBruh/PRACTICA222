# Practica 3 IntroWeb.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Configuracion y conexion a la base de datos.

1. Asegurate de tener una cuenta en [MongoDB Atlas](https://www.mongodb.com/es/cloud/atlas/lp/try4), si no la tienes, crea una.
2. Crea un nuevo clúster en MongoDB Atlas.

3. Configura la IP de acceso y crea un usuario para acceder a la base de datos.

4. Obtén la cadena de conexión de MongoDB Atlas. Puedes encontrarla en la sección "Connect" de tu clúster, luego seleccionar "Drivers" y copia la cadena de conexión que aparece en el paso numero 3 para la conexión al Cluster.

5. Al copiar la cadena de conexión, tendrás algo parecido a esto:
   ```bash
   mongodb+srv://<TuUsuario>:<password>@cluster0.yovvcba.mongodb.net/<NombreBaseDeDatos>?retryWrites=true&w=majority
'TuUsuario' Debe tener por defecto el usuario que creaste.

'password' Debes reemplazarlo por la contraseña de tu usuario

'NombreBaseDatos' Debes reemplazarlo por el nombre que quieres para la base de datos, se recomienda "practica"
- Asegurate de eliminar los simbolos "<" y ">" al reemplazar los datos.

6. Crea un archivo .env en la carpeta backend y agrega la cadena de conexión (ya modificada con tus datos) a MONGODB_URI:
   ```bash
   MONGODB_URI=tu_cadena_de_conexion

## Instalación y Ejecución del Backend (API)

1. Navega a la carpeta del backend:
   ```bash
   cd backend/

2. Instala las dependencias:
   ```bash
   npm install

3. Ejecutar el proyecto backend con:
   ```bash
   npm run start

## Instalación y Ejecución del FrontEndMobile

1. Navega a la carpeta del frontend:
   ```bash
   cd frontendMobile/

2. Instala las dependencias:
   ```bash
   npm install

3. Ejecutar el proyecto frontend con:
   ```bash
   npx expo start
