//NESTED OBJECTS

const Joi = require('joi');

//temos um array e objeto
const arrayString = ['banana','bacon','queijo'];
const arrayObjects = [{exemplo: 'exemplo1'},{exemplo:'exemplo2'}];

//aqui como se fosse o user input, estático, com um objeto nested, outro objeto dentro de um objeto
const userInput = { personalInfo: {
                        endereco: 'rua das ruas',
                        cidade: 'cidadelandia',
                        estado: 'estadolandia',
                    },
                    preferences: arrayString};

//precisamos do schema, pra 'PERSONAL INFO' E 'PREFERENCES'
//vou continuar com a sintaxe antiga da aula, então tem que arrumar depois

//aqui valida um objeto como vimos
const personalInfoSchema = Joi.object().keys({
    endereco : Joi.string().trim().required(),
    cidade : Joi.string().trim().required(),
    estado: Joi.string().trim().lenght(2).required()
});

//e aqui valida um array
const preferencesSchema = Joi.array().items(Joi.string());

//entao monta nosso schema, outro objeto com tudo "já validado"
const schema = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
});

//entao aqui pega as validações, e vai ver se tem erro ou nao e vai enviar passando da validação.
Joi.validate(userInput,schema,(err,result)=>{
    if(err)
        console.log(err);
    else
        console.log(result);
});