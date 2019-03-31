/**
 * Main file
 * 
 * Contains import 
 * 
 */

const express       = require('express');
const request       = require('request');
const bodyParser    = require('body-parser');
const routes        = require('./routes/routes');

require('dotenv').config();
require('./bot')

/**
 * Configuration
 */

const port                  = process.env.PORT || 3000;

/**
 * Express server
 */

const app = express();

app.use(bodyParser.json());

routes(app);

app.listen(port, () =>  console.log(`Server listening on port ${port}`));

