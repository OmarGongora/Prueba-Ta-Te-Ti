let desempate = (min,max) =>{return Math.round(Math.random() * (max - min) + min)};



let aleatorio = desempate(1,2)

let calcSorteo = () =>{
    function detenerse(){
        clearInterval(cambiarForma)
    }
    
    let casilla = document.getElementById('casillaSorteo')
    casilla.classList.toggle('cruz')

    let contador = 0
    let cambiarForma = setInterval(() =>{
            casilla.classList.toggle('cruz')
            casilla.classList.toggle('circulo') 
            contador++
            console.log(contador)

            if(contador == 20){
                detenerse()
            }
        },200)

    if(aleatorio == 1){
        if(casilla.classList.contains('circulo') == true){
            casilla.classList.remove('circulo')
            casilla.classList.add('cruz')
        }
    }else if(aleatorio == 2){
        if(casilla.classList.contains('cruz') == true){
            casilla.classList.remove('cruz')
            casilla.classList.add('circulo')
        }
    }

    

    
}

let intercambioBotones = () =>{
    let botonIniciar = document.getElementById('launch')
    botonIniciar.classList.add('none')

    let botonJugar = document.getElementById('start')
    setTimeout(() => {
        botonJugar.classList.remove('none')
    }, 4500)
}
let numerosCasillas = [1,2,3,4,5,6,7,8,9]

let empezarJuego = () =>{
    let window = document.getElementById('divSorteo')
    window.classList.add('none')

    if(aleatorio == 2){
        turnoCirculo()
    }
    
}









function turnoCirculo(){
    
    let terminado = false
    let proximoJuego
    let juegoCirculo

    while(terminado != true){  
        juegoCirculo = desempate(0,numerosCasillas.length)
        
        proximoJuego = document.getElementById(`casilla${numerosCasillas[juegoCirculo]}`)
        
        numerosCasillas.splice(juegoCirculo,1)

        if(proximoJuego.classList.contains('cruz') == false && proximoJuego.classList.contains('circulo') == false){
            
            proximoJuego.classList.add('circulo')
            
            terminado = true
            }
        }
        
}


let casilla1 = document.getElementById('casilla1')
casilla1.addEventListener('click',() =>{
    if(casilla1.classList.contains('cruz') || casilla1.classList.contains('circulo')){
        console.log("error")
    }else{
        casilla1.classList.add('cruz')
        turnoCirculo()
    }

    // if(casilla1.classList.contains('circulo') == false){
        
    // }
})


let casilla2 = document.getElementById('casilla2')
casilla2.addEventListener('click',() =>{
    if(casilla2.classList.contains('cruz') || casilla2.classList.contains('circulo')){
        console.log("error")
    }else{
        casilla2.classList.add('cruz')
        turnoCirculo()
    }

    // if(casilla2.classList.contains('circulo') == false){
    // }
})


let casilla3 = document.getElementById('casilla3')
casilla3.addEventListener('click',() =>{
    if(casilla3.classList.contains('cruz') || casilla3.classList.contains('circulo')){
        console.log("error")
    }else{
        casilla3.classList.add('cruz')
        turnoCirculo()
    }

    // if(casilla3.classList.contains('circulo') == false){
    // }
})



let casilla4 = document.getElementById('casilla4')
casilla4.addEventListener('click',() =>{
    if(casilla4.classList.contains('cruz') || casilla4.classList.contains('circulo')){
        console.log("error")
    }else{
        casilla4.classList.add('cruz')
        turnoCirculo()
    }

    // if(casilla4.classList.contains('circulo') == false){
    // }
})


let casilla5 = document.getElementById('casilla5')
casilla5.addEventListener('click',() =>{
    if(casilla5.classList.contains('cruz') || casilla5.classList.contains('circulo')){
        console.log("error")
    }else{
        casilla5.classList.add('cruz')
        turnoCirculo()
    }

    // if(casilla5.classList.contains('circulo') == false){
    // }
})

let casilla6 = document.getElementById('casilla6')
casilla6.addEventListener('click',() =>{
    if(casilla6.classList.contains('cruz') || casilla6.classList.contains('circulo')){
        console.log("error")
    }else{
        casilla6.classList.add('cruz')
        turnoCirculo()
    }

    // if(casilla6.classList.contains('circulo') == false){
    // }
})


let casilla7 = document.getElementById('casilla7')
casilla7.addEventListener('click',() =>{
    if(casilla7.classList.contains('cruz') || casilla7.classList.contains('circulo')){
        console.log("error")
    }else{
        casilla7.classList.add('cruz')
        turnoCirculo()
    }

    // if(casilla7.classList.contains('circulo') == false){
    // }
})

let casilla8 = document.getElementById('casilla8')
casilla8.addEventListener('click',() =>{
    if(casilla8.classList.contains('cruz') || casilla8.classList.contains('circulo')){
        console.log("error")
    }else{
        casilla8.classList.add('cruz')
        turnoCirculo()
    }

    // if(casilla8.classList.contains('circulo') == false){
    // }
})

let casilla9 = document.getElementById('casilla9')
casilla9.addEventListener('click',() =>{
    if(casilla9.classList.contains('cruz') || casilla9.classList.contains('circulo')){
        console.log("error")
    }else{
        casilla9.classList.add('cruz')
        turnoCirculo()
    }

    // if(casilla9.classList.contains('circulo') == false){
    // }
})



