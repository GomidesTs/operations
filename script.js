let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let sun = firstNumber + secondNumber
let sub = firstNumber - secondNumber
let mult = firstNumber * secondNumber
let div = (firstNumber / secondNumber).toFixed(2)
let rem = firstNumber % secondNumber


alert(`O primeiro número é ${firstNumber} e o segundo número é ${secondNumber}
A soma dos números é ${sun}
A subtração dos números é ${sub}
A multiplicação dos números é ${mult}
A divisão dos números é ${div}
O resto da divisão dos números é ${rem}`)

if (sun % 2 == 0) {
    alert(`A soma dos numeros  é par`)
} else {
    alert(`A soma dos numeros  é impar`)
}


if (firstNumber > secondNumber) {
    alert(`O primeiro número é maior que o segundo`)
} else if (firstNumber < secondNumber) {
    alert(`O primeiro número é menor que o segundo`)
} else {
    alert(`Os números são iguais`)
}