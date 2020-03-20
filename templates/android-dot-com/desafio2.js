//Desafio 2.0

var viewSource = document.querySelector("[teste]");

viewSource.addEventListener("click", function(){
	dataLayer.push({
		"tipo_botao":"view_source",
		"event":"disparo-personalizado"

	});
});