const OperandoUno = document.getElementById("operandoUno")
OperandoUno.focus()

const OperandoDos = document.getElementById("operandoDos")

const Resultado = document.getElementById("resultado")

const errores = document.getElementById("errores")

const Operaciones = document.getElementById("contenedor")



function realizar_operacioens(event)
{
    errores.innerHTML = ""
    let result = 0
    let operaciones = {
        "multiplicacion" : Number(OperandoUno.value) * Number(OperandoDos.value),
        "suma" : Number(OperandoUno.value) + Number(OperandoDos.value),
        "resta" : Number(OperandoUno.value) - Number(OperandoDos.value),
        "division" : Number(OperandoUno.value) / Number(OperandoDos.value),
    }

    if(event.target.id !== "" && OperandoUno.value !== "" && OperandoDos.value !== "" )
    {
        result = operaciones[event.target.id]
        Resultado.innerHTML = result.toPrecision(4)
    }
    else
    {
        errores.innerHTML = "Debe colocar numeros en ambos casilleros"
        Resultado.innerHTML = "error"
    }
    

}

Operaciones.addEventListener("click", realizar_operacioens)




