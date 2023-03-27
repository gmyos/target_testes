function fibonacci(num, sequency){

    if(sequency[sequency.length - 1] >= num){

        if(sequency.indexOf(num) >= 0){
            console.log(`${num} faz parte da sequencia de Fibonacci.\nSequencia: [${sequency}]`);
        } else {
            console.log(`${num} nao faz parte da sequencia de Fibonacci.\nSequencia: [${sequency}]`);
        }

        return sequency;

    }

    sequency.push(sequency[sequency.length - 1] + sequency[sequency.length - 2]);

    return fibonacci(num, sequency);
}

fibonacci(60, [0,1]);