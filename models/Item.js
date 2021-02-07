const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    item : {
        type: String,
        require: true
    },
    description : {
        type: String,
        require: true
    },
    price : {
        type: Number,
        default: 10
    },
})

module.exports = mongoose.model('Items', ItemSchema);