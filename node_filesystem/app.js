// require modulo filesystem = fs
const fs = require("fs");

// metodo de forma sincrona para leer los archivos que hay en el directorio/path
//var files = fs.readdirSync("./asset");

//metodo de forma asincrona, es decir, realiza la acción al final, despues de recorrer todo el archivo

fs.readdir("./asset", (error, files) => {
	if(error){
		throw error
	}

	console.log("Finalizando lectura");
	console.log(files);
});

console.log("Iniciando lectura");

