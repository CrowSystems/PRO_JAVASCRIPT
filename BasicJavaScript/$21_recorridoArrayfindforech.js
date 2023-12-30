//Declaración de array de articulos
var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
]
//Metodo find()
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

//Metodo forEach()
articulo.forEach(function(articulo){
    console.log(articulo.nombre)
});

//Metodos .some()
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
});

/**
 * Descripción:
 * find()
 * Devuelve el primer elemento de un array qye cumpla con la condición dada.
 * 
 * forech()
 * Ejecuta lo que le definamos una vez por cada elemento de nuestro array
 * 
 * some()
 * Comprueba si al menos un elemento del array cumple con la condición que le damos
 * 
 * filter()
 * Devuelve todos los elemento del array que cumplan con la condición dada
 */