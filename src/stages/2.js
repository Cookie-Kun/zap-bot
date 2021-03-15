const banco = require('../banco');

function execute(user, msg){
    let resumo = " RESUMO ";
    let total = 0;

    banco.db[user].itens.forEach((value)=>{
        console.log(value);
        total += value.preco;
    });

    return [`Total é R$ ${total}`]; 
}

exports.execute = execute;