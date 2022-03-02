const express = require('express');
const router = express.Router();
const TeamData = require('../models/TeamData');

//routes
/*router.get('/', (req, res) => {

    TeamData.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});*/

router.get('/name', (req, res) => {
    const data =  {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});

router.get('/', (req, res) => {
    TeamData.find({ })
        .then(() => {
            console.log('Data: ', data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

/*&
router.get('/TeamMatchData', async (req, res) => {
    const data = 
});*/



module.exports = router;