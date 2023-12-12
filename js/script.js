function validarDatoVacio(dato,mensaje){
    while(dato == ''){
        alert('Por favor debe ingresar un valor')
        dato = prompt(mensaje)
    }

    return dato
}

function cargarOpciones(nombreCatalogo,listaCatalogo){
    let opciones = 'Seleccionar ' + nombreCatalogo + '\n' 

    for (let opcion of listaCatalogo){
        opciones += 'Ingresar ' + listaCatalogo.indexOf(opcion) + ' para ' + opcion + '.\n'
    }

    return opciones
}

function validarOpcionSelecionada(opciones,listaCatalogo){
    let opcion = 0
    let bandera = true
    let valorCatalogo = ''

    while(bandera){
        opcion = prompt(opciones)
        opcion = validarDatoVacio(opcion,opciones)

        if (parseInt(opcion)){
            if ((opcion < listaCatalogo.length) && (opcion > 0)){
                valorCatalogo = listaCatalogo[opcion]
                bandera = false
            }else{
                alert('Selecciono una opción invalida')
            }
        }else if(opcion == 0){
            valorCatalogo = listaCatalogo[opcion]
            bandera = false
        }else{
            valorCatalogo = false
            bandera = false
        }
    }
    return valorCatalogo
}

function forzarSeleccion(seleccion,opciones,listacatalogo){
    while(seleccion == false){
        alert('Debe seleccionar una opción')
        seleccion = validarOpcionSelecionada(opciones,listacatalogo)
    }
}

function cargarHamburguesa(){
    const hamburguesa = []
    const aderezos = ['Mostaza','Ketchup','Mayonesa']
    const adicionales = ['Tomate','Lechuga','Cebolla','Cheddar','Bacon']

    let opciones = '' 
    let confirmar = true
    let seleccion = ''

    opciones = cargarOpciones('aderezos',aderezos) 
    let aderezosHamburguesa = ''
    while(confirmar){
        seleccion = validarOpcionSelecionada(opciones,aderezos)

        if (seleccion == false){
            if(aderezosHamburguesa == ''){
                aderezosHamburguesa = 'Sin aderezos'
            }
            confirmar = false
        }else{
            aderezosHamburguesa += seleccion
            confirmar = confirm('Quiere agregar otro aderezo ?')
            if (confirmar){
                aderezos.splice(aderezos.indexOf(seleccion),1)
                if (aderezos.length == 0){
                    alert('No hay mas aderezos para agregar')
                    confirmar = false
                }
                aderezosHamburguesa += ' - '
                opciones = cargarOpciones('aderezos',aderezos)
            }
        }
    }
    confirmar = true
    hamburguesa.push('Aderezo : ' + aderezosHamburguesa)

    opciones = cargarOpciones('adicionales', adicionales)
    let adicionalesHamburguesa = ''

    while(confirmar){
        seleccion = validarOpcionSelecionada(opciones,adicionales)

        if (seleccion == false){
            if(adicionalesHamburguesa == ''){
                adicionalesHamburguesa = 'Sin adicionales'
            }
            confirmar = false
        }else{
            adicionalesHamburguesa += seleccion
            confirmar = confirm('Quiere agregar otro adicional ?')
            if (confirmar){
                adicionales.splice(adicionales.indexOf(seleccion),1)
                if (adicionales.length == 0){
                    alert('No hay mas adicionales para agregar')
                    confirmar = false
                }
                adicionalesHamburguesa += ' - '
                opciones = cargarOpciones('adicionales',adicionales)
            }
        }
    }
    hamburguesa.push('Adicional : ' + adicionalesHamburguesa)

    return hamburguesa.join('\n')
    
}

function cargarBebida(){
    const bebida = []
    const bebidas = ['Coca Cola','Sprite','Fanta','Coca Light','Sprite Zero','Agua']
    const tamanioGaseosa = ['Mediana','Grande']

    let opciones = cargarOpciones('bebida',bebidas)
    let seleccion = validarOpcionSelecionada(opciones,bebidas)

    bebida.push(seleccion)

    opciones = cargarOpciones('tamaño',tamanioGaseosa)
    seleccion = validarOpcionSelecionada(opciones,tamanioGaseosa)

    bebida.push('Tamaño : ' + seleccion)

    return bebida.join('\n')
}

function cargarComplemento(){
    const complemento = []
    const complementos = ['Papas fritas','Ensalada']
    const aderezos = ['Mostaza','Ketchup','Mayonesa']
    const adicionales = ['Cheddar','Bacon','Cheddar y bacon']

    let opciones = cargarOpciones('complemento',complementos)
    let seleccion = validarOpcionSelecionada(opciones,complementos)

    forzarSeleccion(seleccion,opciones,complementos)

    complemento.push(seleccion)

    if (seleccion == 'Papas fritas'){

        opciones = cargarOpciones('aderezos',aderezos)
        let confirmar = true
        let aderezosComplemento = ''
    
        while(confirmar){
            seleccion = validarOpcionSelecionada(opciones,aderezos)
    
            if (seleccion == false){
                if(aderezosComplemento == ''){
                    aderezosComplemento = 'Sin aderezo'
                }
                confirmar = false
            }else{
                aderezosComplemento += seleccion
                confirmar = confirm('Quiere agregar otro aderezo ?')
                if (confirmar){
                    aderezos.splice(aderezos.indexOf(seleccion),1)
                    if (aderezos.length == 0){
                        alert('No hay mas aderezos para agregar')
                        confirmar = false
                    }
                    aderezosComplemento += ' - '
                    opciones = cargarOpciones('aderezos',aderezos)
                }
            }
        }

        complemento.push('Aderezo : ' + aderezosComplemento )

        opciones = cargarOpciones('adicionales',adicionales)
        seleccion = validarOpcionSelecionada(opciones,adicionales)

        if (seleccion == false){
            complemento.push('Adicional : Sin adicional')
        }else{
            complemento.push('Adicional : ' + seleccion)
        }

    }

    return(complemento.join('\n'))
}

function cargarMetodoPago(){
    const metodosPago = ['Debito','Tarjeta de credito','Efectivo']

    let opciones =  cargarOpciones('metodo de pago',metodosPago)
    let seleccion =  validarOpcionSelecionada(opciones,metodosPago)

    forzarSeleccion(seleccion,opciones,metodosPago)

    return seleccion

}

function iniciar(){

    let control = true

    while (control){
        const pedido = []
        alert('Bienvenido al simulador de pedido de hamburguesa')

        let nombre = prompt('Ingrese su nombre')
        let control = 0

        while (control == 0){
            if(nombre === null){
                alert('Por favor ingrese un nombre')
                nombre = prompt('Ingrese su nombre')
            }else{
                nombre = validarDatoVacio(nombre,'Ingrese su nombre')
                control = 1
            }
        }
                       
        alert('Pasaremos a realizar el pedido de la hamburguesa')
        let hamburguesa = cargarHamburguesa()
    
        alert('Con que quiere acompañar la hamburguesa ?')
        let complemento = cargarComplemento()
    
        alert('Que bebida desea tomar ?')
        let bebida = cargarBebida()
    
        alert('Pasaremos a cargar el metodo de pago')
        let mPago = cargarMetodoPago()
    
        pedido.push('Para : ' +  nombre)
        pedido.push('-----------')
        pedido.push('Hamburguesa :\n' + hamburguesa)
        pedido.push('-----------')
        pedido.push('Complemento : ' + complemento)
        pedido.push('-----------')
        pedido.push('Bebida : ' + bebida)
        pedido.push('-----------')
        pedido.push('Metodo de pago : ' + mPago)
    
        alert(pedido.join('\n'))

        control = confirm('Quiere realizar otro pedido ?')
    }

    alert('Muchas gracias por haber utilizado el simulador. Adios')
}


iniciar()