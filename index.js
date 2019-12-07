const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const Mention = require('./models/MentionModel');

const route = require('./routes/index-routes');
app.use('/', route);

const mentionsRoutes = require('./routes/mentions-route');
app.use('/mentions', mentionsRoutes);


module.exports = app;