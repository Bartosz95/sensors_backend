const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const gets = require('./routers/gets');

const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || '/api/v1';

mongoose.connect(process.env.DB_CONNECTION,
    { useNewURlParser: true},
    () => {console.log('connected to DB!');}
);

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());

app.use(BASE_URL, gets);

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}${BASE_URL}`));