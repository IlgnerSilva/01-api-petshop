const Modelo = require('./ModeloTabelaFornecedores')

class Query{
    async listar(){
        const listar = await Modelo.findAll();
        if(listar[0] === undefined) throw new Error('Não há nenhum registro');
        return listar;
    };
    async inserir(fornecedor){
        return await Modelo.create(fornecedor);
    }

    async buscaPorId(id){
        const encontrado = await Modelo.findOne({
            where: {id: id}
        });
        if(!encontrado){
            throw new Error('Não foi encontrado nenhum registro pelo Id');
        }
        return encontrado;
    }

    async atualizar(id, dadosParaAtualizar){
        return Modelo.update(dadosParaAtualizar, {
            where: {id: id}
        })
    }
};

module.exports = Query;
