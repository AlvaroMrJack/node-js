//crear y escribir datos asyncronamente
//funcion writefile

const fs = require("fs");

// recibe un path que es en donde se creará el archivo
// recibe data del archivo
// funcion callback con error
fs.writeFile("./asset/archivo_creado.txt", "Texto ingresado a través de writeFile", (error) => {
	if(error){
		throw error;
	}

	console.log("Exito!");
});