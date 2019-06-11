function iniciar(){
	var elemento=document.getElementById("lienzo1");
	lienzo=elemento.getContext("2d");

	lienzo.shadowColor="rgba(0,0,255,0.5)";
	lienzo.shadowOffsetX=5;
	lienzo.shadowOffsetY=5;
	lienzo.shadowBlur=4;

	lienzo.font="bold 30px calibri";
	lienzo.textAlign="start";
	lienzo.textBaseline="top";
	lienzo.fillStyle="#0017FF";
	lienzo.fillText("ESTE ES",70,129);
	lienzo.fillText("UN RECTANGULO!",70,160);

	//calcular las letras
	var dimensiones=lienzo.measureText("ESTE ES");
	var dimensiones=lienzo.measureText("UN RECTANGULO!");
	lienzo.strokeStyle="#0017FF";
	lienzo.strokeRect(50,125,dimensiones.width+50,100);

	/*-------------------------------------------RECTANGULO--------------------------------------------------------------------*/

	lienzo1=elemento.getContext("2d");

	/**/	

	lienzo1.shadowColor="rgba(0,255,0,0.8)";
	lienzo1.shadowOffsetX=5
	lienzo1.shadowOffsetY=5;
	lienzo1.shadowBlur=4;

	lienzo1.font="bold 24px times new roman";
	lienzo1.textAlign="start";
	lienzo1.textBaseline="top";
	lienzo1.fillStyle="#0AD300";
	lienzo1.fillText("ESTE ES",870,162);
	lienzo1.fillText("UN TRIANGULO!",825,190);

	lienzo1.beginPath();
	lienzo1.moveTo(920,25);
	lienzo1.lineTo(920,25);
	lienzo1.lineTo(1050,230);
	lienzo1.lineTo(790,230);
	lienzo1.closePath();

	lienzo1.strokeStyle="#08A200";
	lienzo1.stroke();

	/*------------------------------------PENTAGONO-----------------------------------------------------------------------------*/

	lienzo2=elemento.getContext("2d");

	lienzo2.shadowColor="rgba(255,0,0,0.8)";
	lienzo2.shadowOffsetX=5
	lienzo2.shadowOffsetY=5;
	lienzo2.shadowBlur=4;

	lienzo2.font="bold 19px Comic Sans MS";
	lienzo2.textAlign="start";
	lienzo2.textBaseline="top";
	lienzo2.fillStyle="#D30000";
	lienzo2.fillText("ESTE ES",500,100);
	lienzo2.fillText("UN",525,130);
	lienzo2.fillText("PENTAGONO!",485,160);
	lienzo2.strokeStyle="#FF0000";

	var X = 0;
	var Y = 0;
	var R = 100;
																	
	var L = 5;
	// si L == 6 el ángulo es de 2π/6 o sea 60°
	var rad = (2*Math.PI)/L;
	// traslada el contexto en el centro del canvas 
	// para poder girar el contexto alrededor del centro 
	lienzo2.translate(elemento.width/2, elemento.height/2);
	//gira el contexto unos 270deg
	lienzo2.rotate(3*Math.PI/2);
	// dibuja el trazado 
	lienzo2.beginPath();
		for(i = 0; i < L; i++ ){
				x = X + R * Math.cos( rad*i );
				y = Y + R * Math.sin( rad*i );
			lienzo2.lineTo(x, y);
		}
	lienzo2.closePath();
	lienzo2.stroke();

}

window.addEventListener("load",iniciar,false);