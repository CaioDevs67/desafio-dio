// Desafio Classificar de nível de Herói

const prompt = require('prompt-sync')()

console.log("Qual o nivel do seu Heroi ?")

while (true) {
    let nome = prompt("Informe o seu nome de Herói: ")
    
    let exp = Number(prompt("Informe a quantidade de experiencia do seu Herói: "))


    if (isNaN(exp)) {
        console.log("Valor inválido! Digite apenas números.")
        continue;
    }

    if (exp < 1000) {
        exp = ("Ferro")
    } else if ((exp >= 1001) && (exp <= 2000)) {
        exp = ("Bronze")
    } else if ((exp >= 2001) && (exp <= 5000)) {
        exp = ("Prata")
    } else if ((exp >= 5001) && (exp <= 7000)) {
        exp = ("Ouro")
    } else if ((exp >= 7001) && (exp <= 8000)) {
        exp = ("Platina")
    } else if ((exp >= 8001) && (exp <= 9000)){
        exp = ("Ascendente")
    } else if ((exp >= 9001) && (exp <= 10000)){
        exp = ("Imortal")
    } else {
        exp = ("Radiante")
    }
    
    console.log(`O Herói de nome ${nome} está no nível de ${exp}`)
    
    break;
}
