#TARJETA DE CREDITO VALIDA
________________________________________
#RESUMEN DEL PROYECTO
Consiste en una tienda online con la pantalla de accesorios de mujeres y hombres, al darle click en cualquier producto para comprar, te redirige a una nueva pantalla y puedes visualizar la descripción con especificaciones, si estas convencido de adquirirlo dándole click a seguir comprando te redirige a la validación de tu tarjeta donde usaremos el algoritmo de lunh para la validación de la tarjeta ingresada para finalmente ocultar los 12 primeros números por tema de seguridad de datos de usuario.
________________________________________
##OBJETIVOS DE APRENDIZAJE
Aprendí a construir una página web que interactúa con el usuario final a través del navegador, utilizando HTML, CSS Y JavaScript.

________________________________________
##DISEÑO
•	Para el diseño, nos basamos mucho en la temática, e intentamos hacerlo lo más claro posible.
•	Utilizamos la plataforma de figma para hacer un diseño más completo de las pantallas posibles.
•	Se pueden visualizar todas las pantallas en la carpeta prototipo, en la raíz del proyecto.
##PROTOTIPO
•	Para el diseño, nos basamos mucho en la temática, e intentamos hacerlo lo más claro posible.
•	Utilizamos la plataforma de figma para hacer un diseño más completo de las pantallas posibles.
•	Se pueden visualizar todas las pantallas en la carpeta prototipo, en la raíz del proyecto.
•	
________________________________________
##PROCESO
________________________________________
ESTRUCTURA HTML
________________________________________
Creamos un archivo HTML por cada vista y son las siguientes:
1. index.HTML: es la pantalla de donde vemos las imágenes de los productos
2. product.HTML: Hice cada una para cada producto
3. validator.HTML: mostramos el formulario de validación
cada una con tres opciones, donde al elegir una, automáticamente te muestra la siguiente.
FUNCIONALIDADES JS
________________________________________
#####Archivos y Funciones
1. index.js: creamos la función saveName para guardar en local el nombre ingresado y mostrar categorías, en caso no se ingrese ningún dato no redirecciona.
2. validator.js: creamos 2 funciones:
-isValid: Usamos el algoritmo de luhn para validar los números de la tarjeta de crédito
-maskify: Sirve para reemplazar los 12 primeros números por “#”y asi ocultarlos

#####Js en el HTML
•	Para la comprar:
-Después de cada imagen encontramos un botón que dice”comprar”y con onclick llamamos a la descripción del producto para finalmente con otro onclick ir a la validación de la tarjeta yen esta ultima pantalla el resultado se mostrara en la parte posterior.
________________________________________
ESTILOS EN CSS
Creamos dos archivos CSS para toda la aplicación, según el prototipo diseñado
1. style.css: define los estilos genéricos de la aplicación y le da los estilos necesarios a index.html y products.html.
2. validator.css: define los estilos más específicos para el formulario
________________________________________
INVESTIGACION  UX:
1-Explicar quiénes son los usuarios y los objetivos en relación con el producto.
Los usuarios son mujeres y hombres que siempre están a la vanguardia de la moda, en nuestra página web les facilitamos fotografías en alta definición y descripción de cada producto para evitar que tengan dudas sobre el producto a comprar
2.Explicar cómo el producto soluciona los problemas/necesidades de dichos usuarios.
En nuestra página encontrara una variedad de productos a precios accesibles, de todas las calidades por lo tanto el tema de precio ni de calidad seria un impedimento para que el usuario decida realizar una compra.
3.Luego colocarás la foto de tu primer prototipo en papel.
las imagenes de mi prototipo se encuentra en la carpeta PROTOTIP adjuntado


