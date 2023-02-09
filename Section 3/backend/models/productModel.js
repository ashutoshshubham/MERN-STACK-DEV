const {Schema, model} = require('../connection');

const mySchema = new Schema({
    product_name : String,
    product_category : String,
    brand : String,
    color : String,
    price : Number
})


module.exports = model('products', mySchema);