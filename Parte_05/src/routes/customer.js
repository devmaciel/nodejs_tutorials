let CustomerModel = require('../models/customer.model');
let express = require('express');
const customerModel = require('../models/customer.model');
const { Router } = require('express');
let router = express.Router();

//Routes
// POST
router.post('/customer', (req,res) =>{
    if(!req.body) {
        return res.status(400).send('Request body is missing');
    }

    // let user = {
    //     name: 'fistname lastname',
    //     email: 'email@gmail.com'
    // }
    let model = new CustomerModel(req.body);
    model.save().then(doc =>{
        if(!doc || doc.length === 0){
            return res.status(500).send(doc);
        }

        res.status(201).send(doc)
    }).catch(err => {
        res.status(500).json(err);
    });
});

// GET
router.get('/customer', (req, res) =>{
    if(!req.query.email){
        return res.status(400).send('Missing URL parameter: email');
    }

    CustomerModel.findOne({
        email: req.query.email
    }).then(doc =>{
        res.json(doc)
    }).catch(err =>{
        res.status(500).json(err);
    });
})

// UPDATE
router.put('/customer', (req,res) =>{
    if(!req.query.email){
        return res.status(400).send('Missing URL parameter: email');
    }

    CustomerModel.findOneAndUpdate({
        email: req.query.email,
    }, req.body,{
        new: true
    }).then(doc =>{
        res.json(doc)
    }).catch(err =>{
        res.status(500).json(err);
    });
});

// DELETE
router.delete('/customer', (req,res) =>{
    if(!req.query.email){
        return res.status(400).send('Missing URL parameter: email');
    }

    CustomerModel.findOneAndRemove({
        email: req.query.email,
    }, req.body,{
        new: true
    }).then(doc =>{
        res.json(doc)
    }).catch(err =>{
        res.status(500).json(err);
    });
});

module.exports = router;