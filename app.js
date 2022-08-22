var botonCancelar = document.getElementById("b-B"); 
var botonAgregarPal = document.getElementById("bto-2");
var botonComenzar = document.getElementById("bto-1");
var botonGuardar = document.getElementById("B-b");
var usuario = document.getElementById("tex1");
var VolverAcom = document.getElementById("b-2");
var Volver = document.getElementById("b-1");
var Verificar = document.getElementById("b-3")

//FUNCIÓN PARA VERIFICAR QUE SOLO SEAN LETRAS MAYÚSCULAS
  const Numeros = (string) => {
  	var out = ""
  	var filtro = "ABCDEFGHIJKLMNOPQRSTUWYZX"
  for(var i = 0; i < string.length; i++) {
      if (filtro.indexOf(string.charAt(i)) != -1)
      	out += string.charAt(i)
  }
    return out
  }


//FUNCIÓN PARA VOLVER A COMENZAR EL JUEGO DE LA SECCIÓN DE JUEGO
VolverAcom.addEventListener("click", () =>{
    
    String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); }
    palabra = palabras[Math.floor(Math.random()*palabras.length)]
    palabraConGuiones = palabra.replace(/./g, "_ ")
	vacio = []
	output.innerHTML = ""
	contadorFallos = 1;
    document.getElementById("output").innerHTML = palabraConGuiones
    document.getElementById("ahorcado").src = "Personaje/Imagen1.png"
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



//FUNCIÓN DEL BOTON VOLVER DE LA SECCIÓN DE AGREGAR PALABRA
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
	document.getElementById("ahorcado").src = "Personaje/Imagen1.png"

})
//FUNCIÓN PARA IR A LA SECCIÓN DE AGREGAR PALABRA
botonAgregarPal.addEventListener("click",function() {
	
	document.getElementById("container").style.display = "initial";
	document.getElementById("text").style.display = "initial";
	document.getElementById("botones").style.display = "initial";
	document.getElementById("Pr-p").style.display= "none";
	document.getElementById("bto-1").style.display = "none";
	document.getElementById("bto-2").style.display = "none";
})

//FUNCIÓN PARA GUARDAR LA PALABRA TEMPORALMENTE
var x;
botonGuardar.addEventListener("click",function(){
	msj("GUARDADA","La palabra fue guardada temporalmente")
	x = document.getElementById("tex1").value
	palabras.push(x)
    document.getElementById("tex1").value = ""
	console.log(palabras)
})

//FUNCIÓN PARA LOS MENSAJES DE GANAR,PERDER Y GUARDADODE PALABRA
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

//BÓTON PARA VERIFICAR LA RESPUESTA DEL USUARIO
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
    document.querySelector("img").src = "Personaje/Imagen1.png"


 }
}

if(haFallado) {
   if(letra !== "")	{

	contadorFallos++
	document.querySelector("img").src = `Personaje/Imagen${contadorFallos}.png`

        if(vacio != letra) {
             vacio.push(letra)
             var result1 = vacio.filter((item,index) =>{
             	return vacio.indexOf(item) === index
             })
             output.innerHTML = result1.join("-")
	          }
	           
        if(contadorFallos > 7) {
			document.querySelector("img").src = "Personaje/Imagen1.png"
			vacio = []
			output.innerHTML = ""
			contadorFallos = 1
  
        	palabra = palabras[Math.floor(Math.random()*palabras.length)]
	    	palabraConGuiones = palabra.replace(/./g,"_ ")
	    	msj("Perdiste","Cierre el mensaje y vuelva a comenzar")
	}  
// SEGUNDO IF
} 
// SEGUNDO IF
}

document.getElementById("output").innerHTML = palabraConGuiones
document.getElementById("t-3").value = ""
})

//FUNCIÓN PARA COMENZAR EL JUEGO
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

//BÓTON PARA CANCELAR
botonCancelar.addEventListener("click",function() {

	document.getElementById("container").style.display = "none";
	document.getElementById("text").style.display = "none";
	document.getElementById("botones").style.display = "none";
	document.getElementById("Pr-p").style.display= "initial";
	document.getElementById("bto-1").style.display = "initial";
	document.getElementById("bto-2").style.display = "initial";
})
//






