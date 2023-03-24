function inverterString(str) {
  // Converter a string em um array de caracteres
  let arrayDeCaracteres = str.split('');

  // Inverter o array
  let arrayInvertido = arrayDeCaracteres.reverse();

  // Juntar os caracteres invertidos em uma string novamente
  let stringInvertida = arrayInvertido.join('');

  // Retornar a string invertida
  return stringInvertida;
}

// Exemplo de uso:
let minhaString = "Olá, mundo!";
let minhaStringInvertida = inverterString(minhaString);
console.log(minhaStringInvertida);
// Saída: "!odnum ,álO"
