# Front-ShoppingCar
Repositorio del front end para prueba de ingreso a una compañía 


## Versión
Proyecto de front end desarrollado con la última versión de Angular 


## Porque?


El front end shoppingCar es un front end diseñado para un proyecto de carrito de compras el cual tiene como finalidad mostrar los conocimientos adquiridos en las tecnologías necesarias para el rol.


En este caso hicimos un proyecto SPA que consta de diferentes componentes que constantemente piden información en unas Apis creadas para este. La finalidad es mostrar un ciclo completo desde el front hasta la base de datos.


## ¿Como funciona?
Lo primero que tenemos que hacer es descargar el repositorio en una máquina local, al hacer esto se nos descarga una aplicación común en angular, el siguiente paso es dar el comando **NPM INSTALL** con el que se instalaran todos los módulos necesarios para que se ejecute esta aplicación. Una vez descarguen, se debe poner **ng Serve** que es el comando por defecto de Angular para iniciar una aplicación. Debe tener en cuenta que antes de iniciar Angular se deben iniciar SQL server managment studio y las tres apis que conforman la prueba ( en primer lugar [**Logistica-ShoppingCar**](https://github.com/juliankgp/Logistica-ShoppingCar), es muy importante que sé la primera ya que esta Api creara la base de datos donde se harán todas las consultas, luego de esta podemos continuar con [**Productos-ShoppingCar**](https://github.com/juliankgp/Productos-ShoppingCar) y  [**Orq-ShoppingCar**](https://github.com/juliankgp/Orq-ShoppingCar)). Una vez esta lista esta parte, se puede  iniciar el proyecto con el comando antes mencionado *ng serve*. Lo redirige a la página principal, dentro de esta página ya estará todo listo para poder hacer compras y guardar pedidos.


NOTA: Se debe tener configurado un ambiente para poder ejecutar un proyecto de angular en el equipo, de lo contrario, se deberá configurar primero esto, instalando Angular CLI, GIT, NPM entre otros. 


## Librerías


- *Bootstrap:* el proyecto fue realizado a base de esta librería, muchos de los componentes los sacamos de aquí y muchos de los estilos también.
- *SweetAlert2:* esta librería nos permite crear popups con alertas cuando hacemos acciones dentro de la app.




## Instalación

Tenga en cuenta las indicaciónes dadas anteriormente en **¿Como funciona?**

Descargue el proyecto en una ruta en su PC, y abra la carpeta con su editor de código con un consola pararse en la ubicación de los archivos


Instale las dependencias con el comando

```sh
npm install
```

Una vez descargan los modulos debe ingresar 

```sh
ng serve
```

De esta manera iniciara la aplicación 

## Repositorios relacionados

La aplicación consta de tres repositorios para funcionar: 
[**Logistica-ShoppingCar**](https://github.com/juliankgp/Logistica-ShoppingCar) : Este repositorio es el principal del backend, se encarga de crear la estructura de la base de datos y de gestionar todo lo referente a los pedidos enviados desde el API [**Orq-ShoppingCar**](https://github.com/juliankgp/Orq-ShoppingCar).

[**Productos-ShoppingCar**](https://github.com/juliankgp/Productos-ShoppingCar): Este repositorio se encarga de gestionar todos los productos del catálogo, envía y devuelve todas las peticiones del front referente con los productos. 

[**Orq-ShoppingCar**](https://github.com/juliankgp/Orq-ShoppingCar): Este repositorio es un API que se encarga de gestionar todas las peticiones del Frontend, dependiendo de lo que necesite hace un llamado a otras apis, o devuelve la información pertinente. 

## Metodos
[**API ORQ**](https://github.com/juliankgp/Orq-ShoppingCar)
| Nombre | Path | Método |
| ------ | ------ | ------ |
| getItem |[*api/Productos/ObtenerProductoPorId?id=1*](https://github.com/juliankgp/Productos-ShoppingCar) | GET	|
| getItems | [*api/Productos/ObtenerProductos*](https://github.com/juliankgp/Productos-ShoppingCar) | GET	|
| createItem | [*api/Productos/CrearProducto*](https://github.com/juliankgp/Productos-ShoppingCar) | POST	|
| getPedidos  | [*api/Facturacion/ObtenerPedidos*](https://github.com/juliankgp/Logistica-ShoppingCar)| GET |
| facturarPedidos |[*api/Facturacion/FacturarPedido*](https://github.com/juliankgp/Logistica-ShoppingCar) |POST|
| guardarPedido | [*api/Facturacion/GuardarPedido*](https://github.com/juliankgp/Logistica-ShoppingCar) |POST|

