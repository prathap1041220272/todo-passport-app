'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const passportSetUp = require('./config');
const cors = require('cors');
const app = express();
const models = require('./models/')
const port = 3000;


app.use(express.static('public'))

/*
 *  resource sharing
 */
app.use(cors());

/*
 * Middleware 
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
require('./routes')(app);






app.listen(port, () => console.log('TODO Operation Listen on Port No ' + port))