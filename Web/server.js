const express = require('express');
const mongoose = require('mongoose');

const user = require('./routes/api/user');
const userReport = require('./routes/api/userReport');
const ltoInfo = require('./routes/api/ltoInfo');
const ltoReport = require('./routes/api/ltoReport');

const app =  express();

app.use(express.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, {useNewUrlParser: true})
    .then(()=>console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.use('/api/user', user);
app.use('/api/userReport', userReport);
app.use('/api/ltoInfo', ltoInfo);
app.use('/api/ltoReport', ltoReport);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`)); 

