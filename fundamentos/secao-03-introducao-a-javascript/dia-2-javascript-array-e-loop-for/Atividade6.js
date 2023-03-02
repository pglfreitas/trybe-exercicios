let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0

for (index =0; index < numbers.length; index+= 1 ) {
    console.log(numbers[index])

    soma += numbers[index]

}

console.log(soma)

let mediaAritimetica = soma / numbers.length
console.log(mediaAritimetica)

if(soma > 20) {
    console.log("Valor maior que 20")
}
else {
    console.log("Valor menor ou igual a 20")
}

let maiorNumero = numbers[0]

for(let index2 = 1; index2 < numbers.length; index2+= 1){
    if (numbers[index2] > maiorNumero) {maiorNumero = numbers[index2]}
}

console.log(maiorNumero)

let numerosImpares = 0

for(let index3 = 1; index3 < numbers.length; index3+= 1) {
    if (numbers[index3] % 2 !== 0) {
        numerosImpares += 1
    }
}
console.log(numerosImpares)

if (numerosImpares === 0) {
    console.log("Nenhum valor ímpar encontrado")
}

let menorNumero = numbers[0]

for(let index4 = 1; index4 < numbers.length; index4+= 1){
    if (numbers[index4] < menorNumero) {
        menorNumero = numbers[index4]
    }
}

console.log(menorNumero)


