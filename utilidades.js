let contador = 0;

const incrementar = () => contador++;
const decrementar = () => contador--;
const ObtenerContador = () => contador;

module.exports = {
	incrementar,
	decrementar,
	ObtenerContador
}