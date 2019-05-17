const askMeBot = require('../bot');
const axios    = require('axios');

exports.postTransport = (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
    askMeBot.postMessage('Posted from transportController after call POST on localhost:3000/transport');
    askMeBot.postMessage(JSON.stringify(getTanWaitTime()));
}

const getTanWaitTime = async () => {
    try {
        return await axios.get('http://open.tan.fr/ewp/tempsattente.json/MITR');
    } catch (error) {
        console.error(error);
    }
}
