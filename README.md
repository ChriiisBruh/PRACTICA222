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

3. Ve al archivo config.js del FrontEndMobile y cambia la IP por la tuya (puedes verla yendo a la consola cmd, y escribiendo ipconfig, aqui usaremos la IP que aparece en IPv4 Address)
   ```bash
   const ipAddress = '192.168.0.3'; // Coloca aquí tu dirección IP   

4. Ejecutar el proyecto frontend con:
   ```bash
   npx expo start

5. Si tenemos la aplicacion, escaneamos el codigo desde nuestro celular
6. Si no tenemos la aplicacion, presionamos luego del paso numero 4, la tecla "w" para que se abra en navegador, aqui lo adaptamos a un dispositivo movil.
   
