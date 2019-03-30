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

bot.on('message', (event) => {
    console.log(event);
    // Bot should answer only if he was tag into a message
    if((event.text).includes('UH7D2954Z')){
        let message = '';
        // Trim text
        let text = (event.text).replace('<@UH7D2954Z> ', '');

        // Handle differents sentences 
        // TODO : Replace with Recast AI
        switch(text) {
            case 'Bonjour': 
                message = 'Bonjour ça va?';
                break;
            case 'Oui et toi?':
                message = 'Pas mal, j\' ai pas de cerveau mais on fait avec';
                break;
            case 'Non ça va pas' : 
                message = 'Ta vie est cool.'
                break;
            case 'Ca va?':
                message = 'Evite ce genre de question, je vais finir par faire une random'; 
                break;
            default: 
                message = 'T\'as oublié un ; dans le code, ça risque pas de marcher.';
        }

        // Post a message
        if(message != '') {
            bot.sendMessage(message, conversationID)
                .then(console.log)
                .catch(console.error);
        }
    }
});
