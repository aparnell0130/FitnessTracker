const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api-routes')
const htmlRoutes = require('./routes/html-routes')
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitnessdb', { useNewUrlParser: true });
app.use(apiRoutes, htmlRoutes)

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})