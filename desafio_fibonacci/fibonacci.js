// função que verifica se um número pertence à sequência de Fibonacci
function pertenceFibonacci(num) {
  let fib1 = 0; // primeiro número da sequência
  let fib2 = 1; // segundo número da sequência

  // enquanto o próximo número da sequência for menor ou igual ao número informado
  while (fib2 <= num) {
    // se o número informado for igual a um dos números da sequência, ele pertence à sequência
    if (fib2 === num) {
      return true;
    }

    // calcula o próximo número da sequência
    const nextFib = fib1 + fib2;

    // atualiza os valores dos números da sequência
    fib1 = fib2;
    fib2 = nextFib;
  }

  // se o número informado não for encontrado na sequência, ele não pertence à sequência
  return false;
}

// exemplo de uso da função
const num = ("Digite um número para verificar se pertence à sequência de Fibonacci:");

if (pertenceFibonacci(num)) {
  console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${num} não pertence à sequência de Fibonacci.`);
}
