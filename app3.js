//NORMAL
//const utilidades = require("./utilidades");

//DESTRUCTURACION
const {incrementar, ObtenerContador} = require("./utilidades");

// primero forma instanciando 
//let persona = require("./persona");
//let personaObj = new persona();

//segunda forma sin instanciar
let persona = require("./persona");

//NORMAL
//utilidades.incrementar();
//utilidades.decrementar();

//DESTRUCTURACION
incrementar();
incrementar();

//NOMRAL
//console.log(utilidades.ObtenerContador());

//DESTRUCTURACION
console.log(ObtenerContador());



// mostar funciones de persona
// primero forma instanciando 
//personaObj.Caminar();
//personaObj.Correr();
// primero forma instanciando 



//segunda forma pasando la instancia desde el modulo
persona.Caminar();
persona.Correr();


