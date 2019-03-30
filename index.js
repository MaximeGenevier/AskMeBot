/**
 * Main file
 * 
 * Contains import 
 * 
 */


const express       = require('express');
const request       = require('request');
const sapcai        = require('sapcai').default;
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

const sapcaiRequestToken = process.env.SAPCAI_REQUEST_TOKEN;
const buildAI           = new sapcai.build(sapcaiRequestToken, 'fr');

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
    let text = event.text;
    // Bot should answer only if he was tag into a message
    if(text.includes('UH7D2954Z')){

        // Trim text
        text = text.replace('<@UH7D2954Z> ', '');

        buildAI.dialog({ type: 'text', content: text}, { conversationId: conversationID })
            .then((res) => {
                console.log(res)

                bot.sendMessage(res.messages[0].content, conversationID)
                    .then(console.log)
                    .catch(console.error);
            });
            
    }
});
