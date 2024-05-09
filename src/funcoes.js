import promptSync from 'prompt-sync';
const prompt = promptSync();


export function acaoEsfera(resposta, heroi){
    do{
        if (isNaN(resposta)) {
            resposta = parseInt(prompt("Entrada inválida. Digite um número: "));
        }
    }while(isNaN(resposta))

    while(resposta < 1 || resposta > 2){
        console.log("Digite um comando válido")
        resposta = parseInt(prompt(heroi+": "))
    }
    if (resposta == 1){
    console.log("você digitou 1")
    }else if(resposta == 2){
    console.log("você digitou 2")
    }
}
