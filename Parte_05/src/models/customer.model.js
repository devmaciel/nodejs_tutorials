let mongose = require('mongose');
import ('../../config.js');

//Database (import config)
// const server = '';
// const database = '';
// const user = '';
// const password = '';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`, 
{ useNewUrlParser: true });

let CustomSchema = new mongose.Schema({
    name: String,
    email: {type: String, require: true, unique: true}
})

module.exports = mongoose.model('Customer', CustomerSchema);