

let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; 
// cual es el numero mayor
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("El número mayor es: " + max);

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
//identificar cual es par e impar
for (let i = 0; i <= numeros.length; i++) {
    let numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero + " es un número par.");
    } else {
        console.log(numero + " es un número impar.");
    }

}
