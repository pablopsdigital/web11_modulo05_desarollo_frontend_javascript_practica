# web11_modulo05_desarrollo_frontend_javascript_practica

Práctica orientada a la creación de un frontend completo con Vanilla JavaScript, sin la utilización de ninguna librería o framework.

# Instalación servidor de pruebas

La tarea está basada en el uso del servidor **sparrest**. Se pueden seguir las instrucciones de instalación desde el siguiente link: https://github.com/kasappeal/sparrest.js

    git clone https://github.com/kasappeal/sparrest.js.git

Adicionalmente se adjunta en la documentación un fichero con datos de prueba para lanzar la aplicación, en el mismo se simula una base de datos con usuarios y anuncios. El fichero se encuentra en el directorio de documentación y se llama **db.json**. [Descargar pulsando aquí](documentation/db.json).
Una vez clonado el proyecto del servidor en una carpeta diferente de la del proyecto y se copiara el fichero **db.json** en el directorio.
Finalmente se instalan las dependencias del proyecto ejecutando

    npm init

y por último se levanta el servidor ejecutando

    npm start

Se puede comprobar si el servidor se encuentra funcionando añadiendo la siguiente url en el navegador de forma que se obtendrá una lista de anuncio en formato json.
http://localhost:8000/api/advertisements
