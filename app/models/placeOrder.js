var mongoose = require('mongoose');
var placeOrderSchema = mongoose.Schema({
    contact: {type: String, required: true},
    mail: {type: String, required: true},
    name: {type: String, required:true},
    productID: {type: String, required:true},
    productPrice: {type: Number, required:true}
},{
    collection: 'placedOrder'
});

var placedOrder = mongoose.model('placedOrder', placeOrderSchema);
module.exports = placedOrder;