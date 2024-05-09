//possibilitando entrada de dados pelo terminal
import promptSync from 'prompt-sync';
const prompt = promptSync();

//variáveis
import {nextQuestion} from '../index.js'
export let classPower
export let xp


//Calculando o poder via Math.ramdom(), ao multiplicar por 100 temos os números de 0 a 99
export function calculoPower(poder){
        poder = Math.floor(Math.random() * 10050);
        xp = poder
        if (poder<1000){
            poder = "Ferro"
        } else if (poder<=2000){
            poder = "Bronze"
        }else if (poder<=5000){
            poder = "Prata"
        }else if (poder<=7000){
            poder = "Ouro"
        }else if (poder<=8000){
            poder = "Platina"
        }else if (poder<=9000){
            poder = "Ascendente"
        }else if (poder<=1000){
            poder = "Imortal"
        }else{
            poder = "Radiante"
        }
        classPower = poder
}

export function acaoEsfera(resposta, poder){
    do{
        if (isNaN(resposta) || resposta < 1 || resposta > 2) {
            resposta = parseInt(prompt("Entrada inválida. Digite 1 para sim ou 2 para não: "))
        } else if(resposta == 2){
            resposta = parseInt(prompt("Não tenha medo de testar seu poder! Digite 1 para sim ou 2 para não: "))
        }
    }while(isNaN(resposta) || resposta != 1)
   
    if (resposta == 1){
        calculoPower(classPower)
    }
}
/*
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

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