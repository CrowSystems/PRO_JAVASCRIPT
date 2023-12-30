/**
 * El metodo .push() nos permite agregar uno o más elementos al final de un array.
 */

// Array inicial
let numArray = [1,2,3,4,5]

//Función
function newNum(){
    numArray.push(6,7)
    //Reviso el array que ahora tiene los números agregados
    consol.log(numArray)
}
newNum()


//Ejemplo con string
let txtArray = ["Ana", "Juan", "Diego", "Lautaro"]

//función
function addCharacteres(){
    txtArray.push("Chris","Maria")
    console.log(txtArray)
}

addCharacteres()

//Shift() elimina el primer elemento de un array, elimina el que elemento que tiene el indice cero
let shiftArray = numArray.shift()

console.log(numArray)

//Pop() el metodo pop elimina el ultimo metodo de un array.
let popArray = numArray.pop()

console.log(numArray)