/**
 * Main file
 * 
 * Contains import 
 * 
 */


const express       = require('express');
const request       = require('request');
const { RTMClient } = require('@slack/rtm-api');
const bodyParser    = require('body-parser');

require('dotenv').config();

/**
 * Configuration
 */

const port          = process.env.PORT || 3000;

const slackAuthToken    = process.env.SLACK_AUTH_TOKEN;
const slackBotToken     = process.env.SLACK_BOT_TOKEN;
const bot               = new RTMClient(slackBotToken);

const conversationID    = 'CGC6TEYKG'

/**
 * Express server
 */

const app = express();

app.use(bodyParser.json());

app.listen(port, () =>  console.log(`Server listening on port ${port}`));

bot.start()
    .catch(console.error);

// TODO - Gestion de la casse 
bot.on('message', (event) => {
    console.log(event);
    let text = 'Random';



    switch(event.text.toLowerCase()) {
        case 'bonjour': 
            text = 'Bonjour ça va?';
            break;
        case 'oui et toi?':
            text = 'Pas mal, j\' ai pas de cerveau mais on fait avec';
            break;
        case 'non ça va pas' : 
            text = 'Ta vie est cool.'
            break;
        case 'ca va?':
            text = 'Evite ce genre de question, je vais finir par faire une random'; 
        case 'tu joue a wow?':
            text = 'Oui, pour la Horde!';
        case 'test':
            text = 'Ouh la, les tests me donnent le trac.';
        case 'as-tu des sentiments?':
            text = 'Bien sûr ! Beaucoup de choses me font vibrer.';
        case 'peux-tu nettoyer ma chambre?':
            text = 'C3P0 a des jambes et des bras et le fera bien mieux que moi.';
        
    }
    if(text != 'Random') {
    bot.sendMessage(text, conversationID)
        .then(console.log)
        .catch(console.error);
    }
});
