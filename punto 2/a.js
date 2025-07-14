const anioNacimiento = prompt("¿En qué año naciste?");
const anioActual = new Date().getFullYear();
const edad = anioActual - Number(anioNacimiento);
alert("Tienes aproximadamente " + edad + " años.");
