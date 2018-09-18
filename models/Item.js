const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const ItemSchema = new Scheme({
    name: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('Item', ItemSchema);