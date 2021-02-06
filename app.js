const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

// Middleware 
app.use('/1',()=>{
    console.log("This will run everytime when we hit 1")
})


//Routes 
app.get('/', (req,res)=>{
    res.send("We are on home")
})

app.get('/1', (req,res)=>{
    res.send("home home..")
})

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log('connected to MongoDB');
})

// Listen on port 3000
app.listen(3000);