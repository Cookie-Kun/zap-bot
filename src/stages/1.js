const cardapio = require('../cardapio');
const banco = require('../banco');

function execute (user, msg){

    if(msg === "*"){
        banco.db[user].stage = 0;
        banco.db[user].itens = [];
        return ["Pedido cancelado com sucesso"];
    }

    if(msg === "#"){
        banco.db[user].stage = 2;
        return ["Ok?", "Estamos fechando seu pedido",];
    }

    if(!cardapio.menu[msg]){
        return ["```Digite # para finalizar o pedido ou * para cancelar```", "Código inválido, digite novamente",];
    }

    banco.db[user].itens.push(cardapio.menu[msg]);

    return ["```Digite # para finalizar o pedido ou * para cancelar```", `Item (${cardapio.menu[msg].descricao}) adicionado com sucesso`,];
}

exports.execute = execute;