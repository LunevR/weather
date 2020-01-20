const path = require('path');
const express = require('express');

const app = express();

const staticPath = path.join(__dirname, '/');

const apiRouter = require('./routes/api');

app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3001);

app.use('/api', apiRouter);

app.listen(app.get('port'), function() {
    console.log('listening');
});
