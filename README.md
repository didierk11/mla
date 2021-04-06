# mla
Una pequeña aplicación que consta de una barra de búsqueda, un listado de resultados y la posiblidad de ver el detalle de cada uno de estos resultados. Todos los datos son consultados desde la API de Mercado Libre.

## Descripción

Se realizó una implementación del sistema en tres capas. Una correspondiente al Cliente, desarrollada en ReactJs, otra en Node correspondiente a la lógica del negocio y finalmente la capa de datos que en este caso se trata de la API pública de Mercado Libre.

Dado este enfoque de desarrollo, encontramos dos directorios bien diferenciados en nuestro proyecto. Cada uno con sus propias dependencias y que pueden ser instalados en ambientes distintos si fuera necesario. 

El directorio app tiene la aplicación cliente desarrollada en ReactJs a partir de create-react-app y con el uso de bootstrap para organizar el layout y react-router para el enrutamiento de las distintas entradas: buscador, resultados de busqueda y detalles del item seleccionado.

El directorio api es un middleware encargado de obtener los datos desde la API de Mercado Libre, darle procesamiento a dichos datos y luego entregarlos como van a ser consumidos por la aplicación cliente. Está desarrollada en NodeJs y ExpressJs.

### Aclaración

El enfoque de tres capas utilizado para el desarrollo, fue utilizado por cuestión de familiaridad con dicha arquitectura y puede mejorarse con un enfoque basado en server side rendering. En esta otra propuesta es en donde Node implementa mediante Express tanto las rutas para consultar los datos con la API de Mercado Libre como las rutas propias a las vistas independientes de la app cliente.

## Funcionamiento

A partir del uso de un buscador en la pantalla inicial, se puede obtener una lista de cuatro articulos relacionados con nuestra búsqueda. Haciendo click en cada uno de ellos, se puede acceder a una pantalla de detalles. El buscador, los resultados de busqueda y el detalle de item son vistas navegables independientes.

## Instrucciones

1. Necesitamos tener instalado Node y npm en nuestro sistema. Luego descargamos el respositorio.
2. Para iniciar el servidor, nos paramos en el directorio mla\api y por consola ejecutamos el comando:
```bash $ npm start ``` http://localhost:3001
3. Iniciar el cliente, nos paramos en el directorio mla\app y por consola ejecutamos el comando:
```bash $ npm start ```  http://localhost:3000

