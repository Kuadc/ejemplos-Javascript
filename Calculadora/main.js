const OperandoUno = document.getElementById("operandoUno")
OperandoUno.focus()

const OperandoDos = document.getElementById("operandoDos")

const Resultado = document.getElementById("resultado")

const errores = document.getElementById("errores")

const Operaciones = document.getElementById("contenedor")



function RealizarOperaciones(event)
{   
    errores.innerHTML = ""
    let result = 0
    if (event.target.id == "multiplicacion")
    {
        result = Number(OperandoUno.value) * Number(OperandoDos.value)
        
    }
    else if (event.target.id == "resta"){
        result = Number(OperandoUno.value) - Number(OperandoDos.value)
    }
    else if (event.target.id == "suma")
        {
        result = Number(OperandoUno.value) + Number(OperandoDos.value)
        
    }
    else{
        result = Number(OperandoUno.value) / Number(OperandoDos.value)
    }
    
    Resultado.innerHTML = result.toPrecision(5)
    
}

Operaciones.addEventListener("click", RealizarOperaciones)



