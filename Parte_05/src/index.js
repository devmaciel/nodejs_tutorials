//Requires Dependencies
let express = require('express');
let app = express();

//Middlewares
app.use(express.static('public'));

//Port
const PORT = process.env.PORT || 8000; //8000 ou 3000 geralmente
app.listen(PORT, () => console.info(`Server started on ${PORT}`));