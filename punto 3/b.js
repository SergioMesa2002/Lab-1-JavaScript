const numero = prompt("Ingresa un número:");

if (Number(numero) > 0) {
  alert("Es positivo");
} else if (Number(numero) < 0) {
  alert("Es negativo");
} else {
  alert("Es cero");
}
