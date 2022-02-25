$(document).ready(function($) {
	
	$("#iniciar").click(function(event) {
		
		//llena carta 1

		let cartas = [];

		for (var i = 1; i <= 16; i++) {


			var num = Math.floor(Math.random() * 54) + 1;
			$("#c1_"+i).attr("src", "img/loteria/"+num+".jpg");

			cartas.push(num);

			cartas.forEach(function(elemento){
				console.log(elemento);
			});
		}

	});

});