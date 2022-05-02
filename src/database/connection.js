const {Sequelize} = require('sequelize');
const config = require('./../config/default.json')
const sequelize = new Sequelize(
    config.mysql['banco-de-dados'],
    config.mysql.usuario,
    config.mysql.senha,
    {
        host: config.mysql.host,
        dialect: 'mysql'
    },
    async()=>{
        try{
            await sequelize.authenticate()
            console.log('Conexão bem sucessedida')
        }catch(err){
            console.error('Sem conexão com o banco: ',err)
        }
});

module.exports = sequelize;