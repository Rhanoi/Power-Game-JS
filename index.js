//importando funçoes de outro arquivo JavaScript
import {acaoEsfera, classPower, xp} from './src/funcoes.js'


//Importando promptSync que permite uma interação com o usuário no terminal
import promptSync from 'prompt-sync';
const prompt = promptSync();

//variáveis
const guilda = "Power Up"
let esfera
let heroi = "Viajante: "
export let nextQuestion = "\n---------------------------------------------------------------------------------------\n\n"

console.log("Olá e bem vindo a guilda "+ guilda+"! Me chamo Renan e sou o lider por aqui!\nQual é o seu nome?")
heroi = prompt(heroi+"")

console.log(nextQuestion+
            "Renan: Então você quer fazer parte da guilda mais forte da região né?\n"+
    "Mas para isso precisamos medir o seu real nível de poder para sabermos quais\nmissões são mais adequadas para tí!"+
    "Nosso medidor de poder vai te ajudar com isso!"
)


console.log("---Você! vê uma esfera de cristal que muda cor---\n")
console.log("\nRenan: Ele vai medir seu xp atual: \n\n"+
"Se XP for menor do que 1.000 = Ferro\n"+
"Se XP for entre 1.001 e 2.000 = Bronze\n"+
"Se XP for entre 2.001 e 5.000 = Prata\n"+
"Se XP for entre 5.001 e 7.000 = Ouro\n"+
"Se XP for entre 7.001 e 8.000 = Platina\n"+
"Se XP for entre 8.001 e 9.000 = Ascendente\n"+
"Se XP for entre 9.001 e 10.000= Imortal\n"+
"Se XP for maior ou igual a 10.001 = Radiante\n\n")
console.log("Deseja fazer o teste agora?\nDigite:\n1 para sim\n2 para não\n")


esfera = parseInt(prompt(heroi+": "))

acaoEsfera(esfera, heroi)

console.log(nextQuestion+"Renan: Bom, vejamos... seu Xp é : "+ xp+ "\n"+
            "então sua classe será... "+ classPower+"!")
console.log("Está decidido! Oficialmente o "+ heroi+ ", pertence a classe "+classPower+"!")
console.log("\n\nTodos da Guilda: Bem vindo "+heroi+"!")
console.log(nextQuestion+"Renan: Grandes aventuras o aguardam!\nVenha sempre a base da guilda para verificar as missoes disponíveis para a sua classe de poder!")
console.log("Até breve!")



/*
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**


## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/