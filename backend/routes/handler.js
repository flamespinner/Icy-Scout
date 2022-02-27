const express = require('express');
const router = express.Router();
require('dotenv/config');

//const Schemas = require('../modules/Schemas);
const db = process.env.DB;
const dbcollection = process.env.DBCOLLECTION;

router.get('', async (req, res) => {
    const matchData = db.dbcollection.find({}, (err, matchData) => {
        if (err) throw err;
        if (matchData) {
            res.end(JSON.stringify(matchData));
        } else {
            res.end();
        }
    });
});
/*router.get('/tweets', async (req, res) => {
    const tweets = Schemas.Tweets; //referance Schemas.js

    const userTweets = await tweets.find({}, (err, tweetData) => { //qury table
        if (err) throw err;
        if (tweetData) {
            res.end(JSON.stringify(tweetData));
        } else {
            res.end();
        }
    });
});*/