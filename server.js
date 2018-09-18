const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Setup MongoDB with MLab
const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
                .then(() => console.log('Mongo DB Connected'))
                .catch(err => console.log('Error on connection '+err));

// Use Routes
app.use('/api/items', items);

port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on the port ${port}`));