const fs = require("fs");

//funcion para leer un archivo
//funcion readFileSync, es sincrono, primer parametro path, segundo parametro objeto con el encoding, para archivo te texto es utf-8
//var texto = fs.readFileSync("./asset/text.txt", {encoding: "utf-8"});
//var texto = fs.readFileSync("./asset/csv", {encoding: "utf-8"});
//console.log(texto);



//funcion para leer de manera asincrona
// funcion readFile, primer parametro es el path, segundo el encoding, en este caso se quita porque es un dato binario... :TODO
// tercer parametro recibe un callback que recibe un error y la data (creo que recibe el tipo de archivo)

//ejemplo 1 con txt

fs.readFile("./asset/text.txt", {encoding: "utf-8"}, (error, txt) => {
	// por ejemplo si no está el archivo buscado retorna el error
	if(error){
		console.log(error.message);
	}
	console.log(txt);
});

//ejemplo 2 con csv

fs.readFile("./asset/csv.csv", {encoding: "utf-8"}, (error, csv) => {
	// por ejemplo si no está el archivo buscado retorna el error
	if(error){
		console.log(error.message);
	}
	console.log(csv);
});

//ejemplo 3 con images
fs.readFile("./asset/unnamed.jpg", (error, image) => {
	// por ejemplo si no está el archivo buscado retorna el error
	if(error){
		console.log(error.message);
	}
	console.log(image);
});