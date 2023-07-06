var numero1 = parseFloat(prompt("Ingresa el primer número:"));
var numero2 = parseFloat(prompt("Ingresa el segundo número:"));

var resultado;

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

resultado = suma(numero1, numero2);
console.log("La suma es: " + resultado);

resultado = resta(numero1, numero2);
console.log("La resta es: " + resultado);

resultado = multiplicacion(numero1, numero2);
console.log("La multiplicación es: " + resultado);

var persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Barcelona"
};

var listaNombres = ["Ana", "Carlos", "Luis", "Pedro", "María"];

console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);

console.log("Lista de nombres:");
console.log(listaNombres);

var nombreBuscado = "Ana";
var nombreEncontrado = listaNombres.includes(nombreBuscado);

console.log("¿Se encontró el nombre '" + nombreBuscado + "' en la lista? " + nombreEncontrado);

var nombresFiltrados = listaNombres.filter(function(nombre) {
  return nombre.length > 4;
});

console.log("Nombres filtrados (con más de 4 caracteres):");
console.log(nombresFiltrados);