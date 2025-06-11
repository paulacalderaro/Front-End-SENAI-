const precos = [12.5, 30, 99.99, 5] ;


const map = precos.map((valor) => 'R$'+ valor.toFixed(2));

console.log(map);