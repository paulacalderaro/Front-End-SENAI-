let regiao = prompt ("Digite a região desejada:").toUpperCase();
let peso = Number(prompt ("Digite o peso:"));

let frete;

switch(regiao){

case "NORTE": 
frete = 24 + (2.20 * peso);
break;

case "NORDESTE":
frete = 22 + (2.10 * peso);
break;

case "CENTRO-OESTE":
 frete = 20 + (2.00 * peso);
 break;

 case "SUDESTE":
frete = 16 + (1.80 * peso);
break;

case "SUL":
frete = 18 + (1.90 * peso);
break;

default:
    console.log("Região inválida!")
    break;

}

if(frete !== undefined){
console.log("O valor do frete é: R$ " + frete.toFixed(2));

}