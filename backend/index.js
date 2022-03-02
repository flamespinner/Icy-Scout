const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

const routes = require('./routes/api');

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.connection.on('connected', () => {
    console.log('Mongoose is Connected!');
});

app.use(express.json()); //parse every jason file coming in from front end
app.use(express.urlencoded({ extended: false })); //parse every urlencoded file coming in from front end. "extended: true/false" -> Read nested

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(morgan('tiny')); //Morgan: HTTP Request Logger
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
