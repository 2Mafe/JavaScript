// Inicializacion del programa 
console.log("¡Welcome al Sistema Interctivo de Mensajes! ");

// Capturar datos del usuario 
let name = prompt("Please, enter your name: ");
let age = prompt("Please,  your age: ");

// Convertit edad a numero 
age = parseInt(age);

// Codigo para Validacion y Mensajes:
if (isNaN(age)) {
    console.error("Error: Please, Enter a valid age in numbers. ");
} else if (age < 18){
    alert(`Hello ${name}, you are a minor. ¡Keep learning and enjoying coding!`);
} else {
    alert(`Hello ${name}, you are of legal age. ¡Prepare for great opportunities in the world of programming!`);
}

