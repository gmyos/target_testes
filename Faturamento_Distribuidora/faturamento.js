'use strict'

 let dados = require('./dados.json');

 let soma = 0; 
 
 dados.forEach(function(a){
    soma = soma + a.valor;

 });

 function calc_porcentagem_faturamento(total, distribuidora){
    distribuidora.porcentagem_faturamento = (distribuidora.valor * 100 )/ total;
    return distribuidora;

 }

 dados = dados.map((a)=>{
    return calc_porcentagem_faturamento(soma,a);
 })

 dados.forEach((a)=>{
   console.log(`O faturamento do estado ${a.estado} representa ${a.porcentagem_faturamento}% do faturamento total de ${soma}` )
 });