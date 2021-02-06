const express = require('express');

const router = express.Router();

//Routes 
router.get('/', (req,res)=>{
    res.send("We are on home")
})

router.get('/1', (req,res)=>{
    res.send("home home..")
})

module.exports = router; 