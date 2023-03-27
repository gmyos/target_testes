'use strict'

 let dados = require('./dados.json');

 let clean_dados = dados.filter((a) => {
    return a.valor > 0
 });

 let menor = clean_dados.reduce(function values(a, b){
    if(a.valor < b.valor) {
        return a;
    }
    else {
        return b;
    }

 })

 let maior = clean_dados.reduce(function values(a, b){
    if(a.valor > b.valor) {
        return a;
    }
    else {
        return b;
    }

 })

 let soma = 0; 
 
 clean_dados.forEach(function(a){
    soma = soma + a.valor;

 })
 

 let media = soma / clean_dados.length;

console.log(`Maior valor encontrado foi no dia ${maior.dia}. Valor: ${maior.valor}`);
console.log(`Menor valor encontrado foi no dia ${menor.dia}. Valor: ${menor.valor}`);
console.log(`Media: ${media}`);