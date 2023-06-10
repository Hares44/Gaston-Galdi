const numero = prompt("Ingresa un número:");

// Verificamos si el número ingresado es positivo, negativo o cero
if (numero > 0) {
  console.log("El número ingresado es positivo.");
} else if (numero < 0) {
  console.log("El número ingresado es negativo.");
} else {
  console.log("El número ingresado es cero.");
}

let numeros = [];

console.log("¡Bienvenido al ingreso de números!");
console.log("Ingresa una serie de números (ingresa un número negativo para finalizar):");

for (;;) {
  const numero = prompt("Ingresa un número:");

  if (numero < 0) {
    break;
  }

  numeros.push(parseInt(numero));
}

console.log("Los números ingresados son:");
console.log(numeros);