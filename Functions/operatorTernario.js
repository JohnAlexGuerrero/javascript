// expresionCondicional ? valorVerdadero : valorFalso

function puedeAccederPlataforma(edad) {
    const deberiaAcceder = edad >= 18 ? true : false;
  
    return deberiaAcceder;
}

console.log(puedeAccederPlataforma(13))

function verificaParOImpar(numero) {
    const resultado = numero % 2 === 0 ? "par" : "impar";
    return resultado;
}

// Uso:
console.log(verificaParOImpar(4)); // Salida: "par"
console.log(verificaParOImpar(7)); // Salida: "impar"

function verificarNumero(numero) {
    return numero > 0 ? "Positivo" : numero === 0 ? "Cero" : "Negativo";
}

// Uso
console.log(verificarNumero(5)); // Salida: "Positivo"
console.log(verificarNumero(0)); // Salida: "Cero"
console.log(verificarNumero(-3)); // Salida: "Negativo"