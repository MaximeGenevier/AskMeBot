const askMeBot = require('../bot');

exports.postTransport = (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
    askMeBot.postMessage('Posted from transportController after call POST on localhost:3000/transport');
}