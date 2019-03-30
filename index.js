/**
 * Main file
 * 
 * Contains import 
 * 
 */

const express       = require('express');
const request       = require('request');
const slack         = require('slack');
const bodyParser    = require('body-parser');

require('dotenv').config();

/**
 * Configuration
 */

const port          = process.env.PORT || 8080;

/**
 * Express server
 */

const app = express();

app.set('port', port);
app.use(bodyParser.json());

app.listen();

/**
 * Logs
 */

 console.log(`Server listening on port ${port}`);
 
