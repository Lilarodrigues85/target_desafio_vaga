/*a) 1, 3, 5, 7, ___

O próximo número seria 9, já que a sequência segue a lógica de adicionar 2 unidades ao número anterior.

Código em JavaScript:*/

let sequence = [1, 3, 5, 7];
let nextNumber = sequence[sequence.length-1] + 2;
console.log(nextNumber); // saída: 9

/*b) 2, 4, 8, 16, 32, 64, ____

O próximo número seria 128, já que a sequência segue a lógica de multiplicar por 2 o número anterior.

Código em JavaScript:*/

let sequence = [2, 4, 8, 16, 32, 64];
let nextNumber = sequence[sequence.length-1] * 2;
console.log(nextNumber); // saída: 128

/*c) 0, 1, 4, 9, 16, 25, 36, ____

O próximo número seria 49, já que a sequência segue a lógica de adicionar o quadrado do índice ao número anterior. Por exemplo, o segundo número (1) é igual a 0 + 1^2; o terceiro número (4) é igual a 1 + 2^2; o quarto número (9) é igual a 4 + 3^2; e assim por diante.

Código em JavaScript: */

let sequence = [0, 1, 4, 9, 16, 25, 36];
let nextIndex = sequence.length + 1;
let nextNumber = sequence[sequence.length-1] + nextIndex**2;
console.log(nextNumber); // saída: 49

/* d) 4, 16, 36, 64, ____

O próximo número seria 100, já que a sequência segue a lógica de adicionar 4 unidades ao número anterior. Por exemplo, o segundo número (16) é igual a 4 + 12; o terceiro número (36) é igual a 16 + 20; o quarto número (64) é igual a 36 + 28; e assim por diante.

Código em JavaScript:*/

let sequence = [4, 16, 36, 64];
let nextNumber = sequence[sequence.length-1] + 4*(sequence.length+1);
console.log(nextNumber); // saída: 100

/* e) 1, 1, 2, 3, 5, 8, ____

O próximo número seria 13, já que a sequência segue a lógica de adicionar os 2 números anteriores. Por exemplo, o terceiro número (2) é igual a 1 + 1; o quarto número (3) é igual a 2 + 1; o quinto número (5) é igual a 3 + 2; e assim por diante.

Código em JavaScript:*/

let sequence = [1, 1, 2, 3, 5, 8];
let nextNumber = sequence[sequence.length-1] + sequence[sequence.length-2];
console.log(nextNumber); // saída: 13

/*f) 2,10, 12, 16, 17, 18, 19, ____

O próximo número seria 20, já que a sequência segue a lógica de adicionar 1 unidade ao número anterior*/