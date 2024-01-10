const objTipoHamburguesa = [
    {nombre: "Simple", precio: 2500},
    {nombre: "Doble", precio: 3500},
    {nombre: "Triple", precio: 4500},
]

const objAderezos = [
    {nombre:"Mostaza",precio: 0},
    {nombre:"Ketchup",precio: 0},
    {nombre:"Mayonesa",precio: 0},
]

const objAdicionalesHamburguesa = [
    {nombre: "Tomate", precio: 2500},
    {nombre: "Lechuga", precio: 2500},
    {nombre: "Cebolla", precio: 2500},
    {nombre: "Cheddar", precio: 2500},
    {nombre: "Bacon", precio: 2500},
]

const objTipoBebida = [
    {nombre: "Coca-Cola", precio: 2500},
    {nombre: "Sprite", precio: 2500},
    {nombre: "Fanta", precio: 2500},
    {nombre: "Coca-Light", precio: 2500},
    {nombre: "Sprite-Zero", precio: 2500},
    {nombre: "Agua", precio: 2500},
]

const ojtTamanioBebida = [
    {nombre: "Chica", precio: 50},
    {nombre: "Mediana", precio: 50},
    {nombre: "Grande", precio: 50},
]

const objTipoComplemento = [
    {nombre: "Papas-fritas", precio: 2500},
    {nombre: "Ensalada", precio: 2500},
]

const objAdicionalesPapas = [
    {nombre: "Cheddar", precio: 2500},
    {nombre: "Bacon", precio: 2500},
]

const objMetodoDePago = [
    {nombre:"Debito"},
    {nombre:"Tarjeta de credito"},
    {nombre:"Efectivo"},
]

function cargarOpciones(titulo,objeto){
    let opciones = `<h3>${titulo}</h3>
                    <section class="opciones">`
    objeto.forEach(({nombre}) => {
        opciones += `<div><p>${nombre}</p><input type="checkbox" id="${nombre}"></div>`
    });
    opciones += `</section>`
    return opciones    
}

function cargarPedido(id){

}

function ocultarSecciones(mostrar,ocultar){
    let seccionMostrar = document.getElementById(mostrar)
    let seccionOcultar = document.getElementById(ocultar)

    seccionMostrar.hidden = false
    seccionOcultar.hidden = true
}

function validarCheck(valor,objeto){
    let botonCheck = ""
    objeto.forEach(({nombre})=>{
        if(valor != nombre){
            botonCheck = document.getElementById(nombre)
            botonCheck.checked = false
        }
    })
}

function validarSeleccion(mensajeError,objeto){
    let botonCheck = ""
    let control = false
    let mensaje = document.getElementById("mensaje")
    objeto.forEach(({nombre})=>{
        botonCheck = document.getElementById(nombre)
        if(botonCheck.checked == true){
            control = true
        }
    })
    
    if(control == false){
        mensaje.innerText = `Seleccione una opcion en ${mensajeError}`
    }else{
        mensaje.innerText = ``
    }

    return control
}
// Funciones para armar las secciones

function seccionHamburguesa(){

    let html = ``
    html += `<section id="hamburguesa" hidden>`
    html += `<h2>Hamburguesa</h2>`
    html += cargarOpciones("Seleccione el tamaño de la hamburguesa",objTipoHamburguesa)
    html += cargarOpciones("Seleccione los aderezos que quiere agregar",objAderezos)
    html += cargarOpciones("Seleccione los adicionales que quiere agregar",objAdicionalesHamburguesa)
    html += `</section>`

    return html
}

function seccionBebida(){

    let html = ``
    html += `<section id="bebida" hidden>`
    html += `<h2>Bebida</h2>`
    html += cargarOpciones("Que tipo de bebida quiere tomar",objTipoBebida)
    html += cargarOpciones("Seleccione el tamaño de la bebida",ojtTamanioBebida)
    html += `</section>`

    return html
}

function seccionComplemento(){

    let html = ``
    html += `<section id="complemento" hidden>`
    html += `<h2>Complemento</h2>`
    html += cargarOpciones("Con que quiere acompañar su hamburguesa",objTipoComplemento)
    html += `<div id="adiPapas" hidden="true">`
    html += cargarOpciones("Seleccione aderezos para sus papas fritas",objAderezos)
    html += cargarOpciones("Quiere agregar algun adicional a las papas fritas ?",objAdicionalesPapas)
    html += `</div>`
    html += `</section>`
    
    return html

}

function seccionPago(){

    let html = ``
    html += `<section id="pago" hidden>`
    html += `<h2>Metodo de pago</h2>`
    html += cargarOpciones("Seleccione el metodo de pago",objMetodoDePago)
    html += `</section>`

    return html
}

function seccionTicket(){

}

// Armado del HTML

document.body.innerHTML = `<div id="portada">
                                <h1>Bienvenido al simulador de comida rapida</h1>
                                <button id="comenzar">Comenzar</button>
                            </div>
                            <main id="main">
                            </main>
                            <br>
                            <button id="atras" hidden>Atras</button>
                            <button id="siguiente" hidden>Siguiente</button>
                            <footer>
                                <p id="mensaje"></p>
                                <br>
                                <div id="pedido">
                                </div>
                            </footer>
                            `

let htmlMain = document.getElementById("main")
let page = ``

page += seccionHamburguesa()
page += seccionBebida()
page += seccionComplemento()
page += seccionPago()

htmlMain.innerHTML = page

let controlPage = 0
let valorObligatorio = false
let ordenId = 0
//Mapeo de botones-inputs

let inicio = document.getElementById("comenzar")
let botonAtras = document.getElementById("atras")
let botonSiguiente = document.getElementById("siguiente")
let mensajeError = document.getElementById("mensaje")

let checkTamanioHamburguesa1 = document.getElementById("Simple")
let checkTamanioHamburguesa2 = document.getElementById("Doble")
let checkTamanioHamburguesa3 = document.getElementById("Triple")

let checkTipoBebida1 = document.getElementById("Coca-Cola")
let checkTipoBebida2 = document.getElementById("Sprite")
let checkTipoBebida3 = document.getElementById("Fanta")
let checkTipoBebida4 = document.getElementById("Coca-Light")
let checkTipoBebida5 = document.getElementById("Sprite-Zero")
let checkTipoBebida6 = document.getElementById("Agua")
let checkTamanioBebida1 = document.getElementById("Mediana")
let checkTamanioBebida2 = document.getElementById("Grande")

let seccionAdicionalesPapas = document.getElementById("adiPapas")
let checkPapas = document.getElementById("Papas-fritas")
let checkEnsalada = document.getElementById("Ensalada")

let checkMetodoPago1 = document.getElementById("Debito")
let checkMetodoPago2 = document.getElementById("Tarjeta de credito")
let checkMetodoPago3 = document.getElementById("Efectivo")

let pedido = document.getElementById("pedido")
let titulo = ``
let cuerpo = ``
//Eventos

inicio.addEventListener("click", ()=>{
    ocultarSecciones("hamburguesa","portada")
    ordenId++
    
    titulo = document.createElement("h2")
    titulo.innerText = "Pedido - " + ordenId
    pedido.appendChild(titulo)
    
    cuerpo = document.createElement("h3")
    cuerpo.id = "PedidoHamburguesa"
    cuerpo.innerText = "Hamburguesa"
    pedido.appendChild(cuerpo)
    
    botonAtras.hidden = false
    botonSiguiente.hidden = false
    controlPage = 1
})

botonAtras.addEventListener("click", ()=>{
    mensajeError.innerText = ``
    switch(controlPage){

        case 1:
            ocultarSecciones("portada","hamburguesa")
            controlPage -= 1
            botonAtras.hidden = true
            botonSiguiente.hidden = true
        break 

        case 2:
            ocultarSecciones("hamburguesa","bebida")
            controlPage -= 1
        break

        case 3:
            ocultarSecciones("bebida","complemento")
            controlPage -= 1
        break

        case 4:
            ocultarSecciones("complemento","pago")
            controlPage -= 1
            botonSiguiente.innerText = "Siguiente"
        break
    }
})

botonSiguiente.addEventListener("click", ()=>{
    valorObligatorio = false
    switch(controlPage){

        case 1:
            valorObligatorio = validarSeleccion("tamaño de la hamburguesa",objTipoHamburguesa)
            if (valorObligatorio){
                ocultarSecciones("bebida","hamburguesa")
                controlPage += 1
            }
        break 

        case 2:
            valorObligatorio = validarSeleccion("el tipo de bebida",objTipoBebida)
            if (valorObligatorio){
                valorObligatorio = validarSeleccion("el tamaño de la bebida",ojtTamanioBebida)
                if (valorObligatorio){
                    ocultarSecciones("complemento","bebida")
                    controlPage += 1
                }
            }
        break

        case 3:
            valorObligatorio = validarSeleccion("complemento de hamburguesa",objTipoComplemento)
            if (valorObligatorio){
                ocultarSecciones("pago","complemento")
                controlPage += 1
                botonSiguiente.innerText = "Pagar"
            }            
        break

        case 4:
            valorObligatorio = validarSeleccion("metodo de pago",objMetodoDePago)
            if (valorObligatorio){
                ocultarSecciones("bebida","hamburguesa")
                controlPage += 1
            }
        break
    }
})

checkTamanioHamburguesa1.addEventListener("click", ()=>{
    validarCheck(checkTamanioHamburguesa1.id,objTipoHamburguesa)
})

checkTamanioHamburguesa2.addEventListener("click", ()=>{
    validarCheck(checkTamanioHamburguesa2.id,objTipoHamburguesa)
})

checkTamanioHamburguesa3.addEventListener("click", ()=>{
    validarCheck(checkTamanioHamburguesa3.id,objTipoHamburguesa)
})

checkTipoBebida1.addEventListener("click", ()=>{
    validarCheck(checkTipoBebida1.id,objTipoBebida)
})
checkTipoBebida2.addEventListener("click", ()=>{
    validarCheck(checkTipoBebida2.id,objTipoBebida)
})
checkTipoBebida3.addEventListener("click", ()=>{
    validarCheck(checkTipoBebida3.id,objTipoBebida)
})
checkTipoBebida4.addEventListener("click", ()=>{
    validarCheck(checkTipoBebida4.id,objTipoBebida)
})
checkTipoBebida5.addEventListener("click", ()=>{
    validarCheck(checkTipoBebida5.id,objTipoBebida)
})
checkTipoBebida6.addEventListener("click", ()=>{
    validarCheck(checkTipoBebida6.id,objTipoBebida)
})

checkTamanioBebida1.addEventListener("click", ()=>{
    validarCheck(checkTamanioBebida1.id,ojtTamanioBebida)
})
checkTamanioBebida2.addEventListener("click", ()=>{
    validarCheck(checkTamanioBebida2.id,ojtTamanioBebida)
})

checkPapas.addEventListener("click", ()=>{
    validarCheck(checkPapas.id,objTipoComplemento)

    if(checkPapas.checked == true){
        seccionAdicionalesPapas.hidden = false
    }else{
        seccionAdicionalesPapas.hidden = true
    }
    
})

checkEnsalada.addEventListener("click", ()=>{
    validarCheck(checkEnsalada.id,objTipoComplemento)
    
    if(checkEnsalada.checked == true){
        seccionAdicionalesPapas.hidden = true
    }
})

checkMetodoPago1.addEventListener("click", ()=>{
    validarCheck(checkMetodoPago1.id,objMetodoDePago)
})
checkMetodoPago2.addEventListener("click", ()=>{
    validarCheck(checkMetodoPago2.id,objMetodoDePago)
})
checkMetodoPago3.addEventListener("click", ()=>{
    validarCheck(checkMetodoPago3.id,objMetodoDePago)
})