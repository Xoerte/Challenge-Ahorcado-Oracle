var botonCancelar = document.getElementById("b-B"); 
var botonAgregarPal = document.getElementById("bto-2");
var botonComenzar = document.getElementById("bto-1");
var botonGuardar = document.getElementById("B-b");
var usuario = document.getElementById("tex1");
var VolverAcom = document.getElementById("b-2");
var Volver = document.getElementById("b-1");
var Verificar = document.getElementById("b-3")
var Imagen = document.querySelector("img")
var Palabras = document.getElementById("container1")
var canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d");

var palabras = ["melon","banana","manzana"];
ctx.fillStyle = 'grey';
ctx.fillRect(80, 0, 1000, 400);
canvas.style.display = "none"
Palabras.style.display = "none"
Imagen.style.display = "none"


document.getElementById("b-2").style.display ="none";
document.getElementById("b-1").style.display ="none";
document.getElementById("b-3").style.display ="none";
document.getElementById("t-3").style.display = "none";
document.getElementById("container").style.display = "none";
document.getElementById("text").style.display = "none";
document.getElementById("botones").style.display = "none";

Volver.addEventListener("click",function(){
canvas.style.display = "none"
Palabras.style.display = "none"
Imagen.style.display = "none"

document.getElementById("t-3").style.display = "none";
document.getElementById("b-3").style.display ="none";
document.getElementById("b-2").style.display ="none";
document.getElementById("b-1").style.display ="none";
document.getElementById("Pr-p").style.display= "initial";
document.getElementById("bto-1").style.display = "initial";
document.getElementById("bto-2").style.display = "initial";

})

Verificar.addEventListener("click",function() {
	var usuario = document.getElementById("tex1").value;
	var usuarioLetra = document.getElementById("t-3").value
	var palabras = ["melon","banana","manzana"];

//for (let i = 0; i < palabras.length ; i++) {
//  if(usuarioLetra == usuario[i]) {
   	 //ctx.font ="500rem"
 // ctx.fillText(usuario[i],300*i,300)
  //ctx.font = "100px"
     
    
     	
     
   
 }
  
//}
//}
)


botonGuardar.addEventListener("click",function(){
	alert("Palabra o Palabras guardadas")
})


botonComenzar.addEventListener("click",function(){
	
	usuario = document.getElementById("tex1").value
	document.getElementById("container").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("botones").style.display = "none";
	document.getElementById("Pr-p").style.display= "none";
	document.getElementById("bto-1").style.display = "none";
 	document.getElementById("bto-2").style.display = "none";
    //canvas.style.display = "initial"
    document.getElementById("t-3").style.display = "initial";
    document.getElementById("b-3").style.display ="initial";
    document.getElementById("b-2").style.display ="initial";
    document.getElementById("b-1").style.display ="initial";
   var letras = document.getElementsByClassName("letraAdivinada")
    Imagen.style.display = "initial"
    Palabras.style.display = "initial"
    for(i = 0 ; i < usuario.length;i++) {
         letras.innerHTML = 
    }

    //var elems = document.querySelector("span");
    //for (let i = 0 ; i < elems.length; i++){
    //elems[i].style.display = 'inital';
} )
   //for(let i = 0; i < usuario.length; i++) {
       
     
    //  ctx.fillStyle = 'black';
    //  ctx.fillRect(80*i+100,380,50,5)
      
   //}


var  intento = 0;


var body = document.querySelector("body")

//document.querySelector("body").addEventListener("keydown",function(e) {
  //  usuario = document.getElementById("tex1").value
   
   //for(let i = 0 ; i < usuario.length; i++){
 
//   if(e.key != usuario[i] && intento < 1  ) {
  //    ctx.fillStyle = 'black';
   //   ctx.fillRect(150, 200, 80, 15);
      //intento = 1
  // }
  // if(e.key != usuario[i] && intento < 2) {
   	//  ctx.fillStyle = 'black';
     // ctx.fillRect(150, 100, 80, 15);
      //intento =  2
     
   //} } 
 
     // } )
    






botonCancelar.addEventListener("click",function(){
	  canvas.style.display = "none"
Palabras.style.display = "none"
Imagen.style.display = "none"
	document.getElementById("container").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("botones").style.display = "none";
	document.getElementById("Pr-p").style.display= "initial";
	document.getElementById("bto-1").style.display = "initial";
	document.getElementById("bto-2").style.display = "initial";
   
   })

botonAgregarPal.addEventListener("click",function() {
	
    document.getElementById("container").style.display = "initial";
    document.getElementById("text").style.display = "initial";
    document.getElementById("botones").style.display = "initial";
    document.getElementById("Pr-p").style.display= "none";
	document.getElementById("bto-1").style.display = "none";
	document.getElementById("bto-2").style.display = "none";
canvas.style.display = "none"
Palabras.style.display = "none"
Imagen.style.display = "none"

})

//document.addEventListener("keydown",function(e) {
 //   usuario = document.getElementById("tex1").value
    
  //  for(let i = 0 ; i < usuario.length; i++){
   //  if (e.key == usuario[i]) {

    // }}
      
 
 
