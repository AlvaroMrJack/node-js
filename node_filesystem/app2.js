//creacion de un directorio
// funcion mkdir de forma asyncrona

const fs = require("fs");
let dir = "Files";

if(fs.existsSync(dir)){
	console.log("El directorio " + dir + " ya existe...");
}else{

	fs.mkdir("Files", (error) => {
		if(error){
			console.log(error.message);
		}
		console.log("Directorio creado!");
	});

}