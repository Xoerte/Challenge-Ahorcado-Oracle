var botonCancelar = document.getElementById("b-B"); 
var botonAgregarPal = document.getElementById("bto-2");
var botonComenzar = document.getElementById("bto-1");
var botonGuardar = document.getElementById("B-b");
var usuario = document.getElementById("tex1");
var VolverAcom = document.getElementById("b-2");
var Volver = document.getElementById("b-1");
var Verificar = document.getElementById("b-3")


  const Numeros = (string) => {
  	var out = ""
  	var filtro = "ABCDEFGHIJKLMNOPQRSTUWYZX"
  for(var i = 0; i < string.length; i++) {
      if (filtro.indexOf(string.charAt(i)) != -1)
      	out += string.charAt(i)
  }
    return out
  }



VolverAcom.addEventListener("click", () =>{


	String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); }

	

	palabra = palabras[Math.floor(Math.random()*palabras.length)]


	palabraConGuiones = palabra.replace(/./g, "_ ")
	vacio = []
	output.innerHTML = ""
	contadorFallos = 1;

	document.getElementById("output").innerHTML = palabraConGuiones
	document.getElementById("ahorcado").src = "Imagen1.png"


})

document.getElementById("output").style.display = "none"
document.querySelector("img").style.display = "none"
document.getElementById("b-2").style.display ="none";
document.getElementById("b-1").style.display ="none";
document.getElementById("b-3").style.display ="none";
document.getElementById("t-3").style.display = "none";
document.getElementById("container").style.display = "none";
document.getElementById("text").style.display = "none";
document.getElementById("botones").style.display = "none";




Volver.addEventListener("click",function(){

	document.getElementById("output").style.display = "none"
	document.querySelector("img").style.display = "none"
	document.getElementById("t-3").style.display = "none";
	document.getElementById("b-3").style.display ="none";
	document.getElementById("b-2").style.display ="none";
	document.getElementById("b-1").style.display ="none";
	document.getElementById("Pr-p").style.display= "initial";
	document.getElementById("bto-1").style.display = "initial";
	document.getElementById("bto-2").style.display = "initial";


	 
	 palabra = palabras[Math.floor(Math.random()*palabras.length)]


	palabraConGuiones = palabra.replace(/./g, "_ ")
	vacio = []
	output.innerHTML = ""
	contadorFallos = 1;

	document.getElementById("output").innerHTML = palabraConGuiones
	document.getElementById("ahorcado").src = "Imagen1.png"

})


botonAgregarPal.addEventListener("click",function() {
	
	document.getElementById("container").style.display = "initial";
	document.getElementById("text").style.display = "initial";
	document.getElementById("botones").style.display = "initial";
	document.getElementById("Pr-p").style.display= "none";
	document.getElementById("bto-1").style.display = "none";
	document.getElementById("bto-2").style.display = "none";


})


var x;
botonGuardar.addEventListener("click",function(){
	msj("GUARDADA","La palabra fue guardada temporalmente")
	x = document.getElementById("tex1").value
	palabras.push(x)
    document.getElementById("tex1").value = ""
	console.log(palabras)



})

function borrar(id) {var elem = document.getElementById(id); return elem.parentNode.removeChild(elem);}
function msj(titulo, contenido, idioma) {
	var padre = document.createElement('div');
	padre.id = 'modal';
	document.body.appendChild(padre);
	var bc = idioma ? idioma : 'Aceptar';
	var ModalData = document.getElementById("modal");
	var boton = "";
	ModalData.innerHTML = '<div id="modal-back"></div><div class="modal"><div id="modal-c"><h3>'+titulo+'</h3><span id="mc">'+contenido+'</span><div id="buttons"><a id="mclose" href="#">'+bc+'</a>'+boton+'</div></div></div>';
	document.querySelector(".modal").style.height = document.getElementById("mc").offsetHeight+100 + 'px';
	document.getElementById('mclose').onclick=function(){ borrar('modal'); };
	document.getElementById('modal-back').onclick=function(){ borrar('modal'); }
}


String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); }
var palabras = ["INDEPENDIENTE","MASOQUISTA","MANZANA"]
var palabra = palabras[Math.floor(Math.random()*palabras.length)]
var palabraConGuiones = palabra.replace(/./g, "_ ")
var output = document.getElementById("usado")
var vacio = [];
document.getElementById("output").innerHTML = palabraConGuiones
var len = document.getElementById("output")
var contadorFallos = 1;


Verificar.addEventListener("click", () => {
	const letra = document.getElementById("t-3").value


	let haFallado = true
	for(const i in palabra) {
		if (letra == palabra[i]) {
			palabraConGuiones = palabraConGuiones.replaceAt(i*2,letra)
			haFallado = false
		}

if (palabraConGuiones.search("_")==-1)  {
	msj("Ganaste","Cierre el mensaje y vuelva a comenzar")
	vacio = []
    output.innerHTML = ""
    palabra = palabras[Math.floor(Math.random()*palabras.length)]
	palabraConGuiones = palabra.replace(/./g,"_ ")
   document.querySelector("img").src = "Imagen1.png"
}

	

}

if(haFallado) {
	
	contadorFallos++
	document.querySelector("img").src = `Imagen${contadorFallos}.png`
  
    if(vacio.forEach() != letra) {	
	  vacio.push(letra)
	  output.innerHTML = vacio.join("-")
	}
  



	
	if(contadorFallos > 7) {
		document.querySelector("img").src = "Imagen1.png"
		vacio = []
		output.innerHTML = ""
		contadorFallos = 1
      //palabras = ["independiente","masoquista","esternocleidomastoideo"]
	    //palabras.push(x)
        palabra = palabras[Math.floor(Math.random()*palabras.length)]
	    palabraConGuiones = palabra.replace(/./g,"_ ")
	    msj("Perdiste","Cierre el mensaje y vuelva a comenzar")
}  
}

document.getElementById("output").innerHTML = palabraConGuiones
})

botonComenzar.addEventListener("click",function() {
	
	usuario = document.getElementById("tex1").value
	document.getElementById("container").style.display = "none";
	document.getElementById("text").style.display = "none";
	document.getElementById("botones").style.display = "none";
	document.getElementById("Pr-p").style.display= "none";
	document.getElementById("bto-1").style.display = "none";
	document.getElementById("bto-2").style.display = "none";
	document.getElementById("t-3").style.display = "initial";
	document.getElementById("b-3").style.display ="initial";
	document.getElementById("b-2").style.display ="initial";
	document.getElementById("b-1").style.display ="initial";
	document.getElementById("output").style.display = "initial"
	document.querySelector("img").style.display = "initial"
})

botonCancelar.addEventListener("click",function() {

	document.getElementById("container").style.display = "none";
	document.getElementById("text").style.display = "none";
	document.getElementById("botones").style.display = "none";
	document.getElementById("Pr-p").style.display= "initial";
	document.getElementById("bto-1").style.display = "initial";
	document.getElementById("bto-2").style.display = "initial";
})







