let nombre = prompt("Escribe tu nombre:");
let edad = parseInt(prompt("Escribe tu edad:"));
let esEstudiante = prompt("¿Eres estudiante? (sí/no):").toLowerCase() === "sí";

// Mostrar los resultados en consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es estudiante?", esEstudiante);