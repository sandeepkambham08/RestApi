const express = require('express');
const router = express.Router();

const Item  = require('../models/Item');


//GETS ALL THE ITEMS
router.get('/', async (req,res)=>{
    try{
        const items = await Item.find();
        res.json(items)
    }
    catch(err){
        res.json({message:err})
    }
});


// SUBMITS AN ITEM
router.post('/',async (req,res)=>{
    const item = new Item({
        item : req.body.Item,
        description : req.body.description
    });

    try{
    const savedItem = await item.save(); 
    res.json(savedItem);
    }
    catch(err){
        res.json({message:err})
    }

});

// GETS A SPECIFIC ITEM
router.get('/:itemId',async (req,res) => {
    try{
        const item = await Item.findById(req.params.itemId);
        res.json(item)
    }
    catch(err){
        res.json({message: err})
    }
})


// DELETE AN ITEM
router.delete('/:itemId',async (req,res) => {
    try{
        const removedItem = await Item.remove({_id:req.params.itemId});
        res.json(removedItem)
    }
    catch(err){
        res.json({message: err})
    }
})

// UPDATE AN ITEM
router.patch('/:itemId',async (req,res) => {
    try{
        const updatedItem = await Item.updateOne({_id:req.params.itemId},{$set : {item:req.body.title}});
        res.json(updatedItem);
    }
    catch(err){
        res.json({message: err})
    }
})

module.exports = router; 