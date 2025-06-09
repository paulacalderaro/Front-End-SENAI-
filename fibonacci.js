
const numero = Number(prompt ("Digite o número:"))

let fibonacci = [];

let anterior = 0;
let atual = 1;
let proximo = 0;

let contador = 0; 

while (contador < numero) {
fibonacci.push(anterior);

proximo = anterior + atual;

anterior = atual;
  atual = proximo;

  contador++;
}

console.log("Sequência de Fibonacci:");
console.log(fibonacci.join(", "));
