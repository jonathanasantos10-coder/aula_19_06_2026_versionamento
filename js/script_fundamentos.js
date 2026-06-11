// comentário de uma linha
/* 
comentário de multiplas linhas
*/

//comando de saída
console.log ("Hello World!")

//declaracao de variaveis
let num = 10
var num2 = 20
const num3 = 30

console.log (num)
console.log (num2)
console.log (num3)

if (true){
    let num4 = 250
    console.log (num4)

    var num5 = 300
}

console.log (num5)

num = 1802

console.log(num)

num2 = 90

console.log (num2)



console.log (num3)

//concatenacao

console.log ('Valor da variável num3 é ' + num3)
console.log ("Valor da variável num3 é " + num3)
console.log (`Valor da variável num3 é ${num3}`)
console.log ('Valor da variável num3 é ' , num3)

// OPERADORES MATEMÁTICOS
/*
    + soma
    - subtração
    * multiplicação
    / divisão
    % módulo - resto a divisão
*/
console.log('A soma dos números é', 12 + 8)
console.log('A subtração entre as variáveis ', num2 - num3)
console.log('A multiplicação dos números' , num2 * num5)
console.log('A divisão entre os valores ', num / num2)
console.log(`O resto da divisão entre 10 e 2 é: ${10 % 2}`)

// OPERADORES RELACIONAIS
/* 
    > MAIOR
    < MENOR
    >= MAIOR OU IGUAL
    <= MENOR OU IGUAL
    != DIFERENTE 
*/

// OPERADORES LÓGICO
/*
    && E
    || OU 
*/ 

 // teste lógico (seleção)
let idade = 14

if(idade>=18){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}

idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade")

/**
 * Renovação de CNH
 * 18 até 49 anos -> 10 anos
 * 50 até 69 -> 5 anos
 * 70 acima -> 3 anos
 */

if(idade < 18){
    console.log(`Com ${idade}, NÃO É PERMITIDO POSSUIR CNH`)
}else if(idade <=49){
    console.log(`COM ${idade}, O TEMPO PARA RENOVAÇÃO É DE 10 ANOS`)}
else if(idade<70){
    console.log(`COM ${idade}, O TEMPO PARA RENOVAÇÃO É DE 5 ANOS`)}
else{
    console.log(`COM ${idade}, O TEMPO PARA RENOVAÇÃO É DE 3 ANOS`)
}

// TABELA VERDADE
/*
    CONJUNÇÃO -> && F
    VV V
    VF F
    FV F
    FF F

    DISJUNÇÃO -> || OU
    VV V
    VF v
    FV V
    FF F
*/

/**
 * A AUTORIZAÇÃO DE ACESSO PARA UM AMBIENTE SEJA DO SEGUINTE MODO:
 * TER IDADE MAIOR OU IGUAL A 18 ANOS E POSSUIR R$ 1000 OU MAIS
 * */

let valor = 1800

if ((idade >=18) && (valor >=1000)){
    console.log("Autorizado o Acesso")
}else{
 console.log("ACESSO NEGADO")
}

if ((idade >=18) || (valor >=1000)){
    console.log("Autorizado o Acesso")
}else{
 console.log("ACESSO NEGADO")
}