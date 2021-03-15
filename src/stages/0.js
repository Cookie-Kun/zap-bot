const cardapio = require('../cardapio');
const banco = require('../banco');

function execute (user, msg){
    let menu = "  CARDAPIO  \n\n";
    Object.keys(cardapio.menu).forEach((value) => {
        let element = cardapio.menu[value];
        menu += `${value} - ${element.descricao} - R$ ${element.preco} \n`
    });

    banco.db[user].stage = 1;

    return [menu, "Oi, sou a assistente da Sueli. Estou com um cardapio delicioso para voce. Escolha os itens abaixo"]
}

exports.execute = execute;