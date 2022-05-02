const ModeloTabela = require('./models/TabelaFornecedores');

ModeloTabela
    .sync()
    .then(()=>{
        console.log('Tabela criada com sucesso!');
    }).catch((err)=>{
        console.log(err)
    })
    