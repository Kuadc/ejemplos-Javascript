function suma(x,y,z){
    console.log(x+y+z)
}

let cadena = "hola mundo"
console.log(`si funciona ${cadena}`)
let sum = ["hola",20,30]
suma(...sum)

//funcion con arrow. let sumando = (sum) => { sum.forEach(function(elemento....))}
// si tiene un unico parametro sin parentisis y si tiene una sola sentencia sin {}
let sumarndo = sum => sum.forEach(function(elemento){
    console.log(elemento)
})
sumarndo(sum)

//desconstructor (puede servir dependiendo de la situacion)

const houses = {
    number : 2,
    direction : "EEUU",
    city : "San Juan"
}

const {number, direction, city} = houses

console.log("numero",houses.number)
console.log("direction",direction)
console.log("city",city)
