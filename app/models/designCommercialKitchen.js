var mongoose = require('mongoose');

var designCommercialKitchenSchema = mongoose.Schema({
    usermail: {type: String, required: true},
    username: {type:String, required: true},
    userContact: {type: String, required: true},
    productDescription: {type: String, required: true},
    kitchenAreaDimension: {type: String, required: true}
},{
    collection: 'designCommercialKitchen'
});

var designCommercialKitchen = mongoose.model('designCommercialKitchen', designCommercialKitchenSchema);
module.exports = designCommercialKitchen;