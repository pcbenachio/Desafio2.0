var botao = document.querySelector(".android-logo-image");

botao.addEventListener("dblclick", function(){
	dataLayer.push({
		"event":"teste"
	})
})