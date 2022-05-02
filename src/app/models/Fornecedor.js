const TabelaFornecedores = require('./../../database/models/Fornecedores/TabelaFornecedores');
const tabelaFornecedores = new TabelaFornecedores();

class Fornecedor{
    constructor({id, empresa, email, categoria, dataCriacao, dataAtualizacao, versao}){
        this.id = id;
        this.empresa = empresa;
        this.email = email;
        this.categoria = categoria;
        this.dataCriacao = dataCriacao;
        this.dataAtualizacao = dataAtualizacao;
        this.versao = versao;
    }

    async criar(){
        const resposta = await tabelaFornecedores.inserir({
            empresa: this.empresa,
            email: this.email,
            categoria: this.categoria
        });
        this.id = resposta.id,
        this.dataCriacao = resposta.dataCriacao,
        this.dataAtualizacao = resposta.dataAtualizacao,
        this.versao = resposta.versao
    }

    async buscaUm(){
        const encontrado = await tabelaFornecedores.buscaPorId(this.id)
        this.empresa = encontrado.empresa;
        this.email = encontrado.email;
        this.categoria = encontrado.categoria;
        this.dataCriacao = encontrado.dataCriacao;
        this.dataAtualizacao = encontrado.dataAtualizacao;
        this.versao = encontrado.versao;
    }

    async atualizar(){
        await tabelaFornecedores.buscaPorId(this.id)
        const campos = ['empresa', 'email', 'categoria'];
        const dadosParaAtualizar = {}

        campos.forEach((campo)=>{
            const valor = this[campo];
            if(typeof valor === 'string' && valor !== null){
                dadosParaAtualizar[campo] = valor
            }    
        });
        
        if(Object.keys(dadosParaAtualizar).length === 0){
            throw new Error('Não foi possível atualizar, verifique os dados fornecidos e tente novamente');
        };
        await tabelaFornecedores.atualizar(this.id, dadosParaAtualizar)
    }
}

module.exports = Fornecedor;