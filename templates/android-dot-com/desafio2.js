//Desafio 2.0

//AQUI EU PREFERI CAPTURAR O ELEMENTO HTML USANDO UM ATRIBUTO AO INVÉS DA CLASSE PARA JÁ PRATICAR O USO:
var viewSource = document.querySelector("[teste]");

//ADICIONO UM ESCUTADOR NO ELEMENTO QUE AO SER CLICADO IRÁ COLOCAR A VARIÁVEL E O EVENTO NO DATALAYER:
viewSource.addEventListener("click", function(){
	dataLayer.push({
		//VARIÁVEL:
		"tipo_botao":"view_source",
		//EVENTO:
		"event":"disparo-personalizado"

	});
});