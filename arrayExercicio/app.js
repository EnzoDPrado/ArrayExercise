function randomNumber(min,max){
    return Math.random() * (max - min) + min;
}

const numerosPares = function(number){
    const pares = [];
    for(let i = 0; i <= number; i++){
        if(i % 2 == 0){
            pares.push(i);
        }
    }
    return pares;
}

const numerosImpares = function(number){
    const impares = [];
    for(let i = 0; i <= number; i++){
        if(i % 2 > 0){
            impares.push(i);
        }
    }
    return impares;
}

const paresAndImpares = function(par1, par2){
    const all = par1.concat(par2);
    return all;
    
}

let generate = randomNumber(1,80);
let newPares = numerosPares(generate);
console.log(newPares);
let newImapres = numerosImpares(generate);
console.log(newImapres)
let teste = paresAndImpares(newPares, newImapres);
console.log(teste);
