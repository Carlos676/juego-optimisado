//funcion de iniciar
const sectionseleccionarAtaque=document.getElementById("selecciona-ataque")
const sectionReiniciar= document.getElementById("reiniciar")
const botonMacotaJugador = document.getElementById("boton-mascota")

const botonReiniciar=document.getElementById("boton-reiniciar")


//funcion de atque
const sectionseleccionaMascota=document.getElementById("seleccina-mascota")

const spanMascotaJuador = document.getElementById("mascota-jugador")
//atque enemigo
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
//conmabate
const spanVidaJugador=document.getElementById("vida-jugador")
const spanVidaEnemigo=document.getElementById("vida-enemigo")   
//crear mensaje
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataque-jugador')
const ataquesDelEnemigo = document.getElementById('ataque-enemigo')

const contenedorTarjetas=document.getElementById("contenedorTarjetas")

const contenedorAtaque=document.getElementById("contenedor-ataques")
//areglos
let mokemones=[]
let mascotaJugador
let ataquesMokemon

//variables globales de los ataques
let ataqueJugado
let ataqueEnemigo=[]


//opciones de mokemones
let opcionMokemon
//
let inputHipo
let inputCapi 
let inputRati 

//variables globales de las vidas

let victoriasJugador=0
let victoriasEnemigo=0

let vidaJugado=3
let vidaEnemigo=3
let botonFuego
let botonAgua
let botonTierra
let botone=[]
let ataqueJUgador=[]

let indexAtaqueJugador
let indexAtaqueEnemigo

let ataqueMoqueponEnemigo
//clasess y objetos

class Mokemon{
    constructor(nombre,foto,vida){
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataque=[]
    }
}

let hipo = new Mokemon("hipo","./imagen/mokepons_mokepon_hipodoge_attack-4e83b55e-c381-4098-9a9d-40d86921d2a7.webp",5)
let capi=new Mokemon("capi","./imagen/mokepons_mokepon_capipepo_attack-1dc6228d-c376-44d0-bc7d-66fa8cd91197.webp",5)
let rati=new Mokemon("rati","./imagen/mokepons_mokepon_ratigueya_attack-b0c80a77-499a-49b6-a722-eab23f055cec.webp",5)

hipo.ataque.push(
    {nombre:"💧",id:"boton-agua"},
    {nombre:"💧",id:"boton-agua"},
    {nombre:"💧",id:"boton-agua"},
    {nombre:"🔥",id:"boton-fuego"},
    {nombre:"🌱",id:"boton-tierra"},
)
capi.ataque.push(
    {nombre:"🌱",id:"boton-tierra"},
    {nombre:"🌱",id:"boton-tierra"},
    {nombre:"🌱",id:"boton-tierra"},
    {nombre:"💧",id:"boton-agua"},
    {nombre:"🔥",id:"boton-fuego"},
)
rati.ataque.push(
    {nombre:"🔥",id:"boton-fuego"},
    {nombre:"🔥",id:"boton-fuego"},
    {nombre:"🔥",id:"boton-fuego"},
    {nombre:"💧",id:"boton-agua"},
    {nombre:"🌱",id:"boton-tierra"},
)

mokemones.push(hipo,capi,rati)

//funcion donde inicia el juego
function iniciarJuego(){
    //proceso para ocultar section ataque
    
    sectionseleccionarAtaque.style.display = "none"
    //proceso para ocultar boton reiniciar
//usando objetos
    mokemones.forEach((moken)=>{
        opcionMokemon=`
        <input type="radio" name="mascota" id=${moken.nombre}>
        <label class="tarjeta-mokepon" for=${moken.nombre}>
            <p>${moken.nombre}</p>
            <img src=${moken.foto} alt=${moken.nombre}>
        </label>
        
        `
        //con esto muestra el valor de js a html
        contenedorTarjetas.innerHTML+=opcionMokemon

        inputHipo = document.getElementById("hipo")
        inputCapi = document.getElementById("capi")
        inputRati = document.getElementById("rati")
        
    })
    
    sectionReiniciar.style.display="none"
    //proceso para selecionar la mascota
    
    botonMacotaJugador.addEventListener("click", seleccionarMacotaJugador)

    //proceso para seleccionar los ataques
    botonReiniciar.addEventListener("click",reiniciarJuego)
} 
//funcion donde selecciona la mascota del enemigo aleatoriamente

//funcion donde selecciona el jugador a la mascota
function seleccionarMacotaJugador(){
    //prodeso para ocultar selecciona mascota
    
    sectionseleccionaMascota.style.display = "none"
    //proceso para mostrar seccion de ataque
    
    sectionseleccionarAtaque.style.display = "flex"
    //asignacion de nombres a las mascotas
   
    
    if (inputHipo.checked) {
        spanMascotaJuador.innerHTML = inputHipo.id
        mascotaJugador=inputHipo.id
    }else if (inputCapi.checked) {
        spanMascotaJuador.innerHTML = inputCapi.id
        mascotaJugador=inputCapi.id

    }else if (inputRati.checked) {
        spanMascotaJuador.innerHTML = inputRati.id
        mascotaJugador=inputRati.id

    } else {
        alert("selecciona una mascota")
    }
    
    extraerAtaque(mascotaJugador)
    seleccionaMascotaEnemigo()

}
function extraerAtaque(mascotaJugador){
    let ataques
    

    for (let i = 0; i < mokemones.length; i++) {
        if (mascotaJugador===mokemones[i].nombre) {
            ataques=mokemones[i].ataque
        }
        
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques){
    ataques.forEach(ataque => {
        ataquesMokemon=`
        <button id=${ataque.id} class="boton-ataque btnAtaque">${ataque.nombre}</button>
        `
        contenedorAtaque.innerHTML+=ataquesMokemon
        
    })
    botonFuego=document.getElementById("boton-fuego")
    botonAgua=document.getElementById("boton-agua")
    botonTierra=document.getElementById("boton-tierra")

    botones=document.querySelectorAll(".btnAtaque")

  
}

function secuenciaAtaque(){
    botones.forEach(boton => {
      boton.addEventListener("click",(e)=>{
        if (e.target.textContent ==="🔥") {
            ataqueJUgador.push("FUEGO")
            console.log(ataqueJUgador)
            boton.style.background ="#112F58"
            boton.disabled = true
        }else if (e.target.textContent ==="💧") {
            ataqueJUgador.push("AGUA")
            console.log(ataqueJUgador)
            boton.style.background ="#112F58"
            boton.disabled = true

        }else {
            ataqueJUgador.push("TIERRA")
            console.log(ataqueJUgador)
            boton.style.background ="#112F58"
            boton.disabled = true

        }
        ataqueAleatorioEnemigo()
      })  
    })
    
}

//funciones de ataques que selecciono el jugador

//seleccion de mascota del enemigo aleatoriamente
function seleccionaMascotaEnemigo(){
    let mascotaAleatoria=aleatorio(0,mokemones.length-1)
    
    spanMascotaEnemigo.innerHTML = mokemones[mascotaAleatoria].nombre
    ataqueMoqueponEnemigo=mokemones[mascotaAleatoria].ataque
    secuenciaAtaque()

 
}
//ataque aleatorio del enemigo
function ataqueAleatorioEnemigo(){
    let ataqueAleatrio=aleatorio(0,ataqueMoqueponEnemigo.length -1)

    if (ataqueAleatrio==0||ataqueAleatrio==1) {
        ataqueEnemigo.push("FUEGO")
    }else if (ataqueAleatrio==3 || ataqueAleatrio==4) {
        ataqueEnemigo.push("AGUA")
    }else {
        ataqueEnemigo.push("TIERRA")
    }
    console.log(ataqueEnemigo)
    //llama a la funcion conbate
    iniciarPelea()
}
function iniciarPelea(){
    if (ataqueJUgador.length===5) {
        combate()
    }
}
//obteer valores aleatorios
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function indexAmbodOponentes(jugador,enemigo){
    indexAtaqueJugador=ataqueJUgador[jugador]
    indexAtaqueEnemigo=ataqueEnemigo[enemigo]
}

//funcion de resultados del combate
function combate(){
    
    for (let index = 0; index < ataqueJUgador.length; index++) {
        if (ataqueJUgador[index]===ataqueEnemigo[index]) {
            indexAmbodOponentes(index,index)
            crearMensaje("EMPATE ")
            
        } else if (ataqueJUgador[index]==="FUEGO"&&ataqueEnemigo[index]==="TIERRA") {
            indexAmbodOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            victoriasJugadorr.innerHTML=victoriasJugador
        }else if (ataqueJUgador[index]==="AGUA"&&ataqueEnemigo[index]==="FUEGO") {
            indexAmbodOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidaJugador.innerHTML=victoriasJugador
        }else if (ataqueJUgador[index]==="TIERRA"&&ataqueEnemigo[index]==="AGUA") {
            indexAmbodOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidaJugador.innerHTML=victoriasJugador
        } else {
            indexAmbodOponentes(index,index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidaEnemigo.innerHTML=victoriasEnemigo
        }
        
    }
    
    revisarVidas()
}
//obtner resultado de vidas
function revisarVidas(){
    if (victoriasJugador==victoriasEnemigo) {
        crearMensajeFinal("ESto fue un empate")
    }else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("Felicitaciones Ganasteeee")
    }else {
        crearMensajeFinal("Los siento , perdiste:(  ")
    }
}
//muestra los mensajes de cada ataque
function crearMensaje(resultado){
  
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
//muestra mensaje para el combate final
function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal
    //bloquea los botones de ataques una vez finalizado
    
    //muestra el boton reiniciar despues de terminar el juego
    sectionReiniciar.style.display="block"
}
//recarga la paina principal
function reiniciarJuego(){
    location.reload()
}
//este comando es donde aranca el jueo desde a funcion principal
window.addEventListener("load", iniciarJuego)