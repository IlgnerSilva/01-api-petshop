const router = require('express').Router();
const Fornecedores = require('../../../database/models/Fornecedores/TabelaFornecedores');
const Fornecedor = require('../../models/Fornecedor')


router.get('/', async(req, res)=>{
    try{
        const fornecedores = new Fornecedores();
        const resposta = await fornecedores.listar();
        res.status(200).send(JSON.stringify(resposta));
    }catch(err){
        res.status(400).send(JSON.stringify(err));
    }
});

router.post('/', async(req, res)=>{
    try{
        const dadosRecebidos = req.body
        const fornecedor = new Fornecedor(dadosRecebidos);
        await fornecedor.criar();
        console.log(fornecedor)
        res.status(200).send(JSON.stringify(fornecedor))
    }catch(err){
        res.status(400).send(JSON.stringify(err));
    }
});

router.get('/:idFornecedor', async(req, res)=>{
    try{
        const id = req.params.idFornecedor;
        const fornecedor = new Fornecedor({id: id});
        await fornecedor.buscaUm();
        res.status(200).send(JSON.stringify(fornecedor))
    }catch(err){
        res.status(400).send(JSON.stringify(err.message))
    }
});

router.put('/:idFornecedor', async(req, res)=>{
    try{
        const id = req.params.idFornecedor;
        const dadosRecebidos = req.body;
        const dados = Object.assign({}, dadosRecebidos, {id: id})
        const fornecedor = new Fornecedor(dados)
        await fornecedor.atualizar()
        res.status(200).end();
    }catch(err){
        res.status(400).send(JSON.stringify(
            {mensagem: err.message}
        ));
    };
});

module.exports = app => app.use('/fornecedores', router);