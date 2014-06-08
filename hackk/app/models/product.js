// app/models/product.js

// load the things we need
var mongoose = require('mongoose');

// define the schema for our product model
var productSchema = mongoose.Schema({
    name: String,
    count: Number,
    url: String,
    user: { id: String }
});


module.exports = mongoose.model('Product', productSchema);
