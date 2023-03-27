'use strict'

function reverseStr(string){
    let array=[];
    let charStr = string.split("")

    for(let i = charStr.length - 1 ; i >= 0; i--){ 
        array.push(charStr[i])
    }

    return array.join("")
}

console.log(reverseStr("Target"))