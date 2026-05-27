let botones = document.querySelectorAll(".juego")
let numero = document.querySelector("#numero")
let reiniciar = document.querySelector("#reiniciar")
let contador = 15
function nombreAlazar() {

    let dado =
        Math.floor(Math.random() * botones.length)

    console.log(dado)

    botones[dado].textContent =
        "Me encontrastes"


    numero.textContent = contador

}

botones.forEach(boton => {

    boton.addEventListener('click', (event) => {

        if (contador > 0) {

            boton.classList.add('red')

            contador--

            numero.textContent = contador
            if (
                event.target.textContent
                == 'Me encontrastes'
            ) {

                alert("Felicidades ganaste ")

                contador = 0
            }

        }

    })

})

reiniciar.addEventListener("click", () => {

    nombreAlazar()

})

nombreAlazar()