// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

const banco = require('./banco');
const stages = require('./stages');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    console.log(message);
    let resp = stages.step[getStage(message.from)].obj.execute(message.from, message.body);
    for( let index = 0; index < resp.length; index++){
      const element = resp[index];
      client
      .sendText(message.from, element)
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
    }
  });
}

function getStage(user){
  return banco.db[user].stage;
}