//Versão Antiga.
// module.exports = function(app, db) {
//     //Nossas Rotas aqui.. O-O'
//     app.post('/notes', (req, res) => {
//         // console.log(req.body)
//         // res.send('Olá NodeJS')
        
//         //aqui o que testamos no postman/ x-www-form-urlencond
//         const note = { title: req.body.title, text: req.body.text };
//         db.collection('notes').insert(note, (err, result) => {
//             //erro ou sucesso
//             if(err) {
//                 res.send({ 'error': 'Ocorreu um erro' });
//             }else{
//                 res.send(result.ops[0]);
//             }
//         });
//     })
// }

var ObjectID = require('mongodb').ObjectID;

//Versão Nova, adaptação 2020
module.exports = function(app,db) {

    //GET by id
    app.delete('/notes/:id', (req, res) =>{
        const id = req.params.id;
        const detalhes = {'_id': new ObjectID(id)};
        db.collection('notes').remove(detalhes, (err, item) =>{
            if(err) {
                res.send({"error":"Ocorreu um erro"}); 
            } else {
                res.send('Note: ' + id + ' deletado!');
            }
        })
    });

    //DELETE by id
    app.get('/notes/:id', (req, res) =>{
        const id = req.params.id;
        const detalhes = {'_id': new ObjectID(id)};
        db.collection('notes').findOne(detalhes, (err, item) =>{
            if(err) {
                res.send({"error":"Ocorreu um erro"}); 
            } else {
                res.send(item);
            }
        })
    });

    //POST Inserir na Database 
    app.post('/notes',(req,res)=>{
        const note = {title: req.body.title, text:req.body.text};
        db.collection('notes').insertOne(note,(err,result)=>{
            if(err) {
                res.send({"error":"Ocorreu um erro"}); 
            } else {
                res.send(result.ops[0])
            }
        });
    });

    //PUT (atualizar informação)
    app.put('/notes/:id', (req, res) =>{
        const id = req.params.id;
        const detalhes = {'_id': new ObjectID(id)};
        const note = {title: req.body.title, text:req.body.text};
        db.collection('notes').update(detalhes, note, (err, item) =>{
            if(err) {
                res.send({"error":"Ocorreu um erro"}); 
            } else {
                res.send('Note: ' + id + ' atualizado!');
            }
        })
    });
};