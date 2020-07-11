//cambiar nombre y eliminar directorio
//la funcion renameSync permite renombrar un directorio
//la funcion rmdir permite eliminar un directorio dada una ruta

const fs = require("fs");

//renombrar y mover un directorio
//fs.renameSync("../directorio", "../Files/Resources");

//extra
const path_to_create = "../"
let dir = "Resources";

if(fs.existsSync(dir)){
	console.log("El directorio " + dir + " ya existe...");
}else{

	fs.mkdir(dir, (error) => {
		if(error){
			console.log(error.message);
		}
		console.log("Directorio creado!");
	});

}
//extra

//eliminar archivos dentro de un directorio
fs.readdirSync(`./${dir}`).forEach((filename) => {
	fs.unlinkSync(`./${dir}/${filename}`);
	console.log(`Archivo ${filename} eliminado...`);
});

//eliminar un directorio
fs.rmdir(`./${dir}`, (error) => {
	if(error){
		throw error;
	}
	console.log('El directorio a sido eliminado...');
});