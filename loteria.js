$(document).ready(function($) {

	var c = 0;
	var baraja = [];
	
	$("#iniciar").click(function(event) {
		//llena carta 1
		let cartas = [];

		for (var i = 1; i <= 16; i++) {

			let b = true;

			while(b){
				let exists = false;
				var num = Math.floor(Math.random() * 54) + 1;

				for (var j=0; j < cartas.length; j++) {
					if(cartas[j] == num){
						exists = true;
					}
				}

				if(!exists){
					$("#c1_"+i).attr("src", "img/loteria/"+num+".jpg");
					b=false;
					cartas.push(num);
				}

			}
		}

		//llenar carta 2
		let cartas2 = [];

		for (var i = 1; i <= 16; i++) {

			let b = true;

			while(b){
				let exists = false;
				var num = Math.floor(Math.random() * 54) + 1;

				for (var j=0; j < cartas2.length; j++) {
					if(cartas2[j] == num){
						exists = true;
					}
				}

				if(!exists){
					$("#c2_"+i).attr("src", "img/loteria/"+num+".jpg");
					$("#c2_"+i).attr("n_img", num);
					b=false;
					cartas2.push(num);
				}

			}
		}
		//asignar baraja
		baraja = [];
		
		for (let index = 1; index <= 54; index++) {
			baraja.push(index);
		}

		$("#lista").empty();
		c=0;

		baraja = baraja.sort(()=> Math.random() - 0.5)

		$("#darCarta").fadeIn("slow");

	});

	$("#darCarta").click(function(event){
		
		if(c < 54){
			$("#lista").append(
				"<div class='col-1'><img class='img-fluid' src='img/loteria/"+baraja[c]+".jpg'></div>"
			);
			c++;
		}
	});

});