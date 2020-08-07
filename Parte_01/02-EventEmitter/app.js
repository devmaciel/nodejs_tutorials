//INCLUDE em events emitter
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', () =>{
//     console.log('tutorial event has occurred');
// });

// //A função de cima ativa, quando ativa o trigger embaixo
// eventEmitter.emit('tutorial');

eventEmitter.on('tutorial', (num1,num2) =>{
    console.log(num1+num2);
});

eventEmitter.emit('tutorial', 1,2);

//==================================================
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

//instanciando novos objetos
let joao = new Person('João');
let pedro = new Person('Pedro');

//adicionando o listener
joao.on('name', () => {
    console.log('Meu nome é: '+joao.name);
});
pedro.on('name', () => {
    console.log('Meu nome é: '+pedro.name);
});

//dando trigger no event
joao.emit('name');
pedro.emit('name');



