# Front-ShoppingCar
Repositorio del front end para prueba de ingreso a una compañia 

## Version
Proyecto de front end desarrollado con la ultima version de Angular 

## Porque?

El front end shoppingCar es un front end diseñado para un proyecto de carrito de compras el cual tiene como finalidad mostrar los conocmientos adquiridos en las tecnologias necesarias para el rol.

En este caso hicimos un proyecto SPA que consta de diferentes componentes que constantemente piden informacion en unas Apis creadas para este. La finalidad es mostrar un ciclo completo desde el front hasta la base de datos.

### ¿como funciona?
Lo primero que tenemos que hacer es descargar el repositorio en una maquina local, al hacer esto se nos descarga una aplicacion comun en angular, el siguiente paso es dar el comando **NPM INSTALL** con el que se instalaran todos los modulos necesarios para que se ejecute esta aplicación. Una vez descarguen, se debe poner **ng Serve** que es el comando por defecto de Angular para iniciar una aplicación. Debe tener en cuenta que antes de iniciar Angular se deben iniciar SQL server managment studio y las tres apis que conforman la prueba ( en primer lugar **Logistica-ShoppingCar**, es muy iportante que se la primera ya que esta Api creara la base de datos donde se haran todas las consultas, luego de esta podemos continuar con **Productos-ShoppingCar** y **Orq-ShoppingCar**). Una vez esta lista esta parte, se puede  iniciar el proyecto con el comando antes mensionado *ng serve*. Lo redirige a la pagina principal, dentro de esta pagina ya estara todo listo para poder hacer compras y guardar pedidos.

NOTA: Se debe tener configurado un ambiente para poder ejecutar un proyecto de angular en la maquina, de lo contrario, se debera configurar primero esto, instalando Angular CLI, GIT, NPM entre otros. 

### Librerias

*Bootstrap:* el proyecto fue realizado a base de esta libreria, muchos de los componente los sacamos de aqui y muchos de los estilos tambien.
*SweetAlert2:* esta libreria nos permite crear popups con alertas cuando hacemos acciones dentro de la app.
