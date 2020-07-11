// CAMBIAR NOMBRE Y ELIMINAR ARCHIVO
// la funcion renameSync permite renombrar un archivo de forma sincrona
// la funcion rename nos permite renombrar un archivo de forma asincrona

const fs =  require("fs");

//cambio de nombre sincrona
//fs.renameSync("../asset/colors.json", "../asset/colors_data.json");

//cambio de forma asyncrona
/*fs.rename("../asset/texto_1.txt", "../Files/texto_1.txt", (error) => {
	if(error){
		throw error;
	}
});*/

//para eliminar un fichero
fs.unlinkSync("../asset/to_delete.jpg");
console.log("Fichero eliminado");