module.exports = (app) => {
    
    // Controllers declaration
    const transportCont = require('../controllers/transportController');

    // Transport API Controller
    app.route('/transport')
        .post(transportCont.postTransport);

}