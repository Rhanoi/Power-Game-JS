//importando funçoes de outro arquivo JavaScript
import {acaoEsfera} from './src/funcoes.js'

//Importando promptSync que permite uma interação com o usuário no terminal
import promptSync from 'prompt-sync';
const prompt = promptSync();

//variáveis
const guilda = "Power Up"
let esfera
let heroi = "Viajante: "
let nextQuestion = "\n---------------------------------------------------------------------------------------\n\n"

console.log("Olá e bem vindo a guilda "+ guilda+"!\nQual é o seu nome?")
heroi = prompt(heroi+"")

console.log(nextQuestion+
            "Então você quer fazer parte da guilda mais forte da região né?\n"+
    "Mas para isso precisamos medir o seu real nível de poder para sabermos quais\nmissões são mais adequadas para tí!"+
    "Nosso medidor de poder vai te ajudar com isso!"
)


console.log("Você! vê uma esfera de cristal que muda cor\n")
console.log("Fazer o teste?\nDigite:\n1 para sim\n2 para não\n")
esfera = parseInt(prompt(heroi+": "))

acaoEsfera(esfera, heroi)