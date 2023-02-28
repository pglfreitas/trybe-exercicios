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