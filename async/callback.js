// NodeJS Fundamentos
//# Clase 07 | Callbacks 

//--> Ejemplo de mi primer funcion asincrona con nodeJS 
// function soyAsincrona(miCallback) {
//     setTimeout(function () {
//         console.log('Estoy siendo asincrono');
//         miCallback();
//     }, 1000);
// }

// console.log('Inciando proceso...');
// soyAsincrona(function () {
//     console.log('Finalizando proceso...');
// });


//--> Funcion mas compleja de asincronismo 
function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log(`Hola ${nombre}`);
        miCallback(nombre);
    }, 2000);
}

function adios(nombre, otroCallback){
    setTimeout(function () {
        console.log(`Adios ${nombre}`);
        otroCallback();
    }, 1000);
}

console.log('Inciando proceso...');
hola('Jhovan',function (nombre) {
    adios(nombre, function(){
        console.log('Finalizando proceso...');
    });
});


