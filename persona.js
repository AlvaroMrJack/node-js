// primero forma instanciando 
/*module.exports = class Persona{

	Caminar(){
		console.log("Caminando")
	}

	Correr(){
		console.log("Correr")
	}
}*/
// primero forma instanciando 

// segunda forma sin instanciar dentro del otro archivo, enviando la instancia directamente desde el modulo

class Persona{

	Caminar(){
		console.log("Caminando")
	}

	Correr(){
		console.log("Correr")
	}
}

module.exports = new Persona();