const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// DB Connection
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => {
    console.log('DB Connected!');
})
.catch( (err) => {
    console.log(err);
});

mongoose.set('debug', Boolean(process.env.MONGOOSEDEBUG));

/*
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'frontend/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'frontend/build', routesHandler));
    });
}
*/

const PORT = process.env.PORT || 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});