const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas');

require('dotenv/config');

//const Schemas = require('../modules/Schemas);
const db = process.env.DB;
const dbcollection = process.env.DBCOLLECTION;
/*
router.get('/ProcessedTeamSchema', async (req, res) => {
    const data = Schemas.EventData;
    const matchData = db.dbcollection.find({}, (err, matchData) => {
        if (err) throw err;
        if (matchData) {
            res.end(JSON.stringify(matchData));
            console.log(matchData);
        } else {
            res.end();
        }
    });
});*/

router.get('/TeamMatchData', async (req, res) => {
    const data = Schemas.EventData;

    const ProcessedMatchData = await tweets.find({}).populate("user").exec((err, matchData) => {
        if (err) throw err;
        if (matchData) {
            res.end(JSON.stringify(matchData));
        } else {
            res.end();
        }
    });
});

module.exports = router;