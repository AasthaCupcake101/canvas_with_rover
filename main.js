canvas=document.getElementById ("myCanvas")
ctx=canvas.getContext("2d")

 roverwidth=100
 roverheight=100
 backroundimage="mars.jpg"
 roverimage="rover.png"
 roverx=10 
 rovery=10
 backroundimagetag= ""
 roverimagetag=""
 function add (){
backroundimagetag=new Image()
backroundimagetag.onload=uploadbacround
backroundimagetag.src=backroundimage

roverimagetag=new Image()
roverimagetag.onload=uploadrover
roverimagetag.src=roverimage
 }
 function uploadbacround () {
    ctx.drawImage(backroundimagetag,0,0,canvas.width,canvas.height) 

 }
 function uploadrover () {
    ctx.drawImage(roverimagetag,roverx,rovery,roverwidth,roverheight) 

 }
 window.addEventListener("keydown",my_keydown)
function my_keydown (e) {
   keypress=e.keyCode
   if (keypress=="38")  {
      up ()
   }
   if (keypress=="39")  {
      right ()
   }
   if (keypress=="40")  {
      down ()
   }
   if (keypress=="37")  {
   left ()
   }
}
function up (){
   if (rovery>0) {
   rovery =rovery -10
   uploadbacround ()  
   uploadrover ()
   }
}
function down (){
   if (rovery<600) {
   rovery =rovery +10
   uploadbacround ()  
   uploadrover ()
   }
}
function left (){
   if (roverx>0) {
   roverx =roverx -10
   uploadbacround ()  
   uploadrover ()
   }
}
function right (){
   if (roverx<800) {
   roverx =roverx +10
   uploadbacround ()  
   uploadrover ()
   }
}















