//require no readline
const readline = require('readline');

//interface com INPUT OUTPUT
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//numero randômico de 1 a 10, soma depois os dois números
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let resposta = num1+num2;

//Saída esperando uma entrada. se responder certo, fecha a interface
rl.question(`Quanto é ${ num1 } + ${ num2 }? \n`,
(userInput) => {
    if(userInput.trim() == resposta){ //trim() remove os espaços em branco
        //resposta correta, fecha interface
        rl.close();
    }else{
        //resposta incorreta, continua interface e verifica novamente.
        rl.setPrompt('Incorreto, tente novamente\n');
        rl.prompt();
        rl.on('line', (userInput) =>{
            if(userInput.trim() == resposta){
                rl.close();
            }else{
                rl.setPrompt(`Mizeravi, Quanto é ${ num1 } + ${ num2 }? \n`);
                rl.prompt();
            }
        });
    }
});

//event listenner, quando executado a rl.question()
rl.on('close', () =>{
    console.log('Correto');
});
