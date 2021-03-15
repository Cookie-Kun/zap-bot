const cardapio = require('../cardapio');

function execute (){
    let menu = "  CARDAPIO  \n\n";
    Object.keys(cardapio.menu).forEach((value) => {
        let element = cardapio.menu[value];
        menu += `${value} - ${element.descricao}      R$ ${element.preco} \n`
    });
    return [menu, "Oi, sou a assistente da Sueli. Estou com um cardapio delicioso para voce"]
}

exports.execute = execute;