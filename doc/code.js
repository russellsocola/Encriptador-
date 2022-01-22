function encriptar(elemento){
	//metodo 1
	var palabra = document.getElementsByTagName('input')[0].value;

	var palabra_codificada1= palabra.replace(/e/g,"enter");
	var palabra_codificada2= palabra_codificada1.replace(/i/g,"imes");
	var palabra_codificada3= palabra_codificada2 .replace(/a/g,"ai");
	var palabra_codificada4= palabra_codificada3 .replace(/o/g,"ober");
	var palabra_codificada5= palabra_codificada4 .replace(/u/g,"ufat");
	document.getElementById('resultado').innerHTML =  palabra_codificada5; 
	/*

	//metodo 2	; aun deficiente pero usable
	var palabra_codificada=[];
	for (var i = 0; i < palabra.length; i++) {
		if(palabra[i]=="e"){
			palabra_codificada[i]= palabra[i].replace(/e/g, "enter")
		}else if(palabra[i]=="i"){
			palabra_codificada[i]= palabra[i].replace(/i/g,"imes")
		}else if(palabra[i]=="a"){
			palabra_codificada[i]= palabra[i].replace(/a/g,"ai")
		}else if(palabra[i]=="o"){
			palabra_codificada[i]= palabra[i].replace(/o/g,"ober")
		}else if(palabra[i]=="u"){
			palabra_codificada[i]= palabra[i].replace(/u/g,"ufat")
		}else{
			palabra_codificada[i]=palabra[i]
		}
		
	}
	document.getElementById('resultado').innerHTML =  palabra_codificada;*/
}

function desencriptar(elemento){
	//metodo 1
	var palabra = document.getElementsByTagName('input')[0].value;
	//var palabra_codificada = atob(palabra);
	var palabra_codificada1= palabra.replace(/enter/g,"e");
	var palabra_codificada2= palabra_codificada1.replace(/imes/g,"i");
	var palabra_codificada3= palabra_codificada2 .replace(/ai/g,"a");
	var palabra_codificada4= palabra_codificada3 .replace(/ober/g,"o");
	var palabra_codificada5= palabra_codificada4 .replace(/ufat/g,"u");
	document.getElementById('resultado').innerHTML =  palabra_codificada5;
}

function copiarporta(){
	var texto = document.getElementById("resultado");
	texto.select();
	texto.setSelectionRange(0, 99999);
	document.execCommand("copy");
}