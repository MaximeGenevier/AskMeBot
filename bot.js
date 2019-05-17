/**
 * Bot.js
 * 
 * Contains AskMeBot configuration
 */

// Import lib
const sapcai        = require('sapcai').default;
const { RTMClient } = require('@slack/rtm-api');

// Set configuration and constant
const slackAuthToken        = process.env.SLACK_AUTH_TOKEN;
const slackBotToken         = process.env.SLACK_BOT_TOKEN;
const askMeBot              = new RTMClient(slackBotToken);

const sapcaiRequestToken    = process.env.SAPCAI_REQUEST_TOKEN;
const buildAI               = new sapcai.build(sapcaiRequestToken, 'fr');

const conversationID        = process.env.SLACK_CONV_ID;
const botID                 = process.env.SLACK_BOT_ID;

// Start bot
askMeBot.start()
    .catch(console.error);

// Handle message
askMeBot.on('message', (event) => {
    console.log(event);
    let text = event.text;

    // Bot should answer only if it was tag into a message
    if(text != undefined && text.includes(botID)){

        // Trim text
        text = text.replace(`<@${botID}> `, '');

        buildAI.dialog({ type: 'text', content: text}, { conversationId: conversationID })
            .then((res) => {
                console.log(res)

                if(res.messages.length > 0) {
                    postMessage(res.messages[0].content);
                }
            });
    }
});

// Export function to allow remote call
const postMessage = (message) => {
    askMeBot.sendMessage(message, conversationID)
        .then(console.log)
        .catch(console.error);
};

exports.postMessage = postMessage;