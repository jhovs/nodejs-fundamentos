// NodeJS Fundamentos
//# Clase 08 | Callbacks Hell 

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


function hablar(callbackHablar){
    setTimeout( function() {
        console.log('BLa bla bla ...');
        callbackHablar();
    }, 1000);
}


function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        });
    }else{
        adios(nombre, callback);
    }
}

//-- 
console.log('Inciando proceso...');

hola('Jhovan',function (nombre) {
    conversacion(nombre, 3, function(){
        console.log('Proceso terminado...');
    });
});


// hola('Jhovan',function (nombre) {
//     hablar(function() {
//         adios(nombre, function(){
//             console.log('Finalizando proceso...');
//         });
//     });
// });


