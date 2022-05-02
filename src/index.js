const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/controllers/index')(app);


app.listen(port, ()=>{
    console.log(`Servidor rodando em localhost:${port}`);
});