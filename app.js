const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  Import routes
const itemsRoute = require('./routes/items');


// Middleware 
app.use('/items',itemsRoute);

// Routes  

app.get('/', (req,res)=>{
    res.send("We are on home")
})



mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log('connected to MongoDB');
})

// Listen on port 3000
app.listen(3000);