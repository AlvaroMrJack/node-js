//funcion appendFile para agregar datos a un archivo de forma asincrona
//si el archivo no existe se crea un nuevo archivo


const fs = require("fs");
var data = require("../asset/colors.json");

//parametro path
//parametro data
//parametro callback
data.colorList.forEach((color) => {
	fs.appendFile("../Files/color.md", `${color.name} : ${color.hex}\n`, (error) => {
		if(error){
			throw error;
		}
	});
});
