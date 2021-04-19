# mla
Una pequeña aplicación que consta de una barra de búsqueda, un listado de resultados y la posiblidad de ver el detalle de cada uno de estos resultados. Todos los datos son consultados desde la **API de Mercado Libre**.

## Funcionamiento

A partir del uso de un buscador en la pantalla inicial, se puede obtener una lista de cuatro articulos relacionados con nuestra búsqueda. Haciendo click en cada uno de ellos, se puede acceder a una pantalla de detalles. El buscador, los resultados de busqueda y el detalle de item son vistas navegables independientes.

## Contexto del desarrollo

Se realizó una implementación del sistema en tres capas. Una correspondiente al Cliente, desarrollada en **ReactJs**, otra en **NodeJS** correspondiente a la lógica del negocio y finalmente la capa de datos que en este caso se trata de la API pública de Mercado Libre.

Dado este enfoque de desarrollo, encontramos dos directorios bien diferenciados en nuestro proyecto. Cada uno con sus propias dependencias y que pueden ser instalados en ambientes distintos si fuera necesario. 

El directorio app tiene la aplicación cliente desarrollada en ReactJS a partir de **create-react-app** y con el uso de **bootstrap** para organizar el layout y **react-router** para el enrutamiento de las distintas entradas: buscador, resultados de busqueda y detalles del item seleccionado.

El directorio api es un middleware encargado de obtener los datos desde la API de Mercado Libre, darle procesamiento a dichos datos y luego entregarlos como van a ser consumidos por la aplicación cliente. Está desarrollada en NodeJs y **ExpressJS**.

### Aclaración

*El enfoque de tres capas utilizado para el desarrollo, fue utilizado por cuestión de familiaridad con dicha arquitectura y puede mejorarse con un enfoque basado en server side rendering. En esta otra propuesta es en donde Node implementa mediante Express tanto las rutas para consultar los datos con la API de Mercado Libre como las rutas propias a las vistas independientes de la app cliente.*

## Instalación

1. Necesitamos tener instalado **Node** y **npm** en nuestro sistema. 
2. Clonamos el repositorio. Dado que tenemos un repositorio con dos directorios y cada uno tiene sus propias dependencias, debemos ejecutar ``` $ npm install ``` en cada uno de ellos.
    1. Nos paramos en el directorio ``` mla\api ```, ejecutamos por consola ``` $ npm install ```. 
    2. Luego nos paramos en el directorio ``` mla\app ``` y ejecutamos por consola ``` $ npm install ```
3. Para iniciar el servidor, nos paramos en el directorio ``` mla\api ``` y por consola ejecutamos el comando:
``` $ npm start ``` http://localhost:3001
4. Iniciar el cliente, nos paramos en el directorio ``` mla\app ``` y por consola ejecutamos el comando:
``` $ npm start ```  http://localhost:3000

## Testing

### Test de Componentes

Se pueden realizar tests sobre componentes desde ``` mla\app ``` y ejecutamos por consola ``` $ npm run test ```
Estos tests estan destinados a comprobar el correcto renderizado de los componentes de la aplicación y están desarrollados con el framework **Jest**.

Por otro lado, también podemos realizar tests sobre los endpoint de nuestra api desde ``` mla\api ``` y ejecutamos ``` $ npm run test ```
Estos tests estan destinados a comprobar la respuesta y datos que entregan los endpoints implementados. Se utilizó **Jest** y **SuperTest**.

## Versionado

* **15/04/2021** - *v1.0.1* Refactor de los componentes React en mla/app. Se comienza a trabajar con test de componentes.
* **19/04/2021** - *v1.0.2* Se comienza a trabajar con test sobre endpoints de nuestra api.

