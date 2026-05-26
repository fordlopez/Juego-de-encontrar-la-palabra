let boton=document.querySelectorAll(".btnn ")
let numero=document.querySelectorAll("#numero")
let reiniciar=document.querySelector("#reiniciar")
let contador=15

boton.forEach(boton => {
    boton.addEventListener('click', (event) => {
if(event.target.textContent == 'Reiniciar el juego'){
    nombreAlazar()

}else{
       boton.classList.add('red')
     contador=contador-1
     numero.textContent=contador
     console.log(contador)

}
  
    
})
}) 
function nombreAlazar(){
    
   

 
    
}






/*    if(event.target.textContent=="1"){
          n1.value.textContent="el pepe"
        }
/*   boton.s */tyle.backgroundColor = 'red'; 

 boton.target =classList.add('red')