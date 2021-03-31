# mla

Descripción:
Se trata de 2 aplicaciones separadas. Por un lado el Cliente implementado en ReactJs e iniciado con create-react-app y por otro el Servidor, implementado con NodeJs / ExpressJs e iniciado con Express Generator. Por este motivo es que cada parte tiene sus propias dependecias y no es necesario que se instalen bajo el mismo directorio. Para los fines de desarrollo y prueba bajo el mismo dominio, se incluyen en el servidor las dependecias de Cors.

El servidor actua como un middleware que obtiene datos de la API de Mercado Libre, consultando listado de articulos a partir de un parámetro de búsqueda y por otro lado obtiene el detalle de un artículo en particular a través de la búsqueda por su id.

El cliente consulta el middleware para listar por pantalla 4 artículos de acuerdo a un parametro de busqueda ingresado en la barra de búsqueda superior. Tiene la posibilidad de ver los detalles de cada uno de estos articulos también.

Instrucciones:
1. Para iniciar el servidor, nos paramos en el directorio mla\api y por consola ejecutamos el comando $ npm start. http://localhost:3001
2. Iniciar el cliente, nos paramos en el directorio mla\app y por consola ejectamos el comando $ npm start. http://localhost:3000

