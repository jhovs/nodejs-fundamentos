// NodeJS Fundamentos
//# Clase 05 | Variables de entorno

/*/--> Veremos como desde cualquier sitio fuera del entorno podemos meter información adentro. */
let saludo = 'Hola mundo!';  //Esta variable la declaré aquí y puedo llamarla aquí.
console.log(saludo);

/*/-->
- ¿Qué ocurre cuando quiero llamar un valor que no va dentro del software, si quiereo llamar una API, 
o que necesito una clave, o un token?

- El código no  debería guardar este tipo de valores credenciales y por esto existen las variables de 
entorno. Si grabasemos estos datos estaríamos obligados a cambiar el código del programa cada vez que 
se ejecutan en lugares diferentes, dificultando el despliegue.

- Por buenas prácticas heredadas de Linux las variables de entorno que vengan desde fuera 
(process.env.VARIABLE ) se ponen en mayúscula y se separan mediante guion bajo en vez de espacio.

- Uso de OR || para indicar de que si no existe variable de entorno dar una respuesta
*/

let nombre = process.env.NOMBRE || 'Sin nombre';
let web= process.env.MI_WEB || 'Sin Web';
const apikey = process.env.APIKEY || 'YUFVGIUGIU87DS99';

console.log(`Hola ${nombre}!`);
console.log(`Mi web es: ${web}`);
console.log(`Apikey es ${apikey}`);