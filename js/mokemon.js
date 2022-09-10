//funcion de iniciar
const sectionseleccionarAtaque=document.getElementById("selecciona-ataque")
const sectionReiniciar= document.getElementById("reiniciar")
const botonMacotaJugador = document.getElementById("boton-mascota")
const botonFuego=document.getElementById("boton-fuego")
const botonAgua=document.getElementById("boton-agua")
const botonTierra=document.getElementById("boton-tierra")
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
//areglos
let mokemones=[]

//variables globales de los ataques
let ataqueJugado
let ataqueEnemigo

//opciones de mokemones
let opcionMokemon
//
let inputHipo
let inputCapi 
let inputRati 

//variables globales de las vidas
let vidaJugado=3
let vidaEnemigo=3

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
    
    botonFuego.addEventListener("click", ataqueFuego)
    
    botonAgua.addEventListener("click", ataqueAgua)
    
    botonTierra.addEventListener("click", ataqueTierra)
    
    botonReiniciar.addEventListener("click",reiniciarJuego)
} 
//funcion donde selecciona la mascota del enemigo aleatoriamente
function seleccionaMascotaEnemigo(){
    let mascotaAleatrio=aleatorio(1,3)

    if (mascotaAleatrio==1) {
        spanMascotaEnemigo.innerHTML = "hipo"
    }else if (mascotaAleatrio==2) {
        spanMascotaEnemigo.innerHTML = "Capi"
    }else {
        spanMascotaEnemigo.innerHTML = "Rati"
    }
}
//funcion donde selecciona el jugador a la mascota
function seleccionarMacotaJugador(){
    //prodeso para ocultar selecciona mascota
    
    sectionseleccionaMascota.style.display = "none"
    //proceso para mostrar seccion de ataque
    
    sectionseleccionarAtaque.style.display = "flex"
    //asignacion de nombres a las mascotas
   
    
    if (inputHipo.checked) {
        spanMascotaJuador.innerHTML = inputHipo.id
    }else if (inputCapi.checked) {
        spanMascotaJuador.innerHTML = inputCapi.id
    }else if (inputRati.checked) {
        spanMascotaJuador.innerHTML = inputRati.id
    } else {
        alert("selecciona una mascota")
    }
    seleccionaMascotaEnemigo()

}

//funciones de ataques que selecciono el jugador
function ataqueFuego(){
    ataqueJugado="FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugado="AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugado="TIERRA"
    ataqueAleatorioEnemigo()
}
//seleccion de mascota del enemigo aleatoriamente
function seleccionaMascotaEnemigo(){
    let ataqueAleatrio=aleatorio(0,mokemones.length-1)
    
    spanMascotaEnemigo=mokemones[mascotaAleatrio]

 
}
//ataque aleatorio del enemigo
function ataqueAleatorioEnemigo(){
    let ataqueAleatrio=aleatorio(1,3)

    if (ataqueAleatrio==1) {
        ataqueEnemigo="FUEGO"
    }else if (ataqueAleatrio==2) {
        ataqueEnemigo="AGUA"
    }else {
        ataqueEnemigo="TIERRA"
    }
    //llama a la funcion conbate
    combate()
}
//obteer valores aleatorios
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
//funcion de resultados del combate
function combate(){
    
    if (ataqueEnemigo==ataqueJugado) {
        crearMensaje("EMPATE")
    }else if (ataqueJugado=="FUEGO" && ataqueEnemigo=="TIERRA") {
        crearMensaje("GANASTE")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML= vidaEnemigo
    }else if (ataqueJugado=="AGUA" && ataqueEnemigo=="FUEGO") {
        crearMensaje("GANASTE")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML= vidaEnemigo
    }
    else if (ataqueJugado=="TIERRA" && ataqueEnemigo=="AGUA") {
        crearMensaje("GANASTE")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML= vidaEnemigo
    }
    else {
        crearMensaje("PIERDES")
        vidaJugado--
        spanVidaJugador.innerHTML= vidaJugado
    }
    
    revisarVidas()
}
//obtner resultado de vidas
function revisarVidas(){
    if (vidaEnemigo==0) {
        crearMensajeFinal("FELICITACIONES GANASTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    }else if (vidaJugado==0) {
        crearMensajeFinal("TE GANO LA PC ============================")
        
    }
}
//muestra los mensajes de cada ataque
function crearMensaje(resultado){
  
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugado
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
//muestra mensaje para el combate final
function crearMensajeFinal(resultadoFinal){
    
    sectionMensajes.innerHTML = resultadoFinal
    //bloquea los botones de ataques una vez finalizado
    
    botonFuego.disabled = true

    
    botonAgua.disabled = true

    
    botonTierra.disabled = true
    //muestra el boton reiniciar despues de terminar el juego
    
    sectionReiniciar.style.display="block"
}
//recarga la paina principal
function reiniciarJuego(){
    location.reload()
}
//este comando es donde aranca el jueo desde a funcion principal
window.addEventListener("load", iniciarJuego)