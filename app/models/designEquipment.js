var mongoose = require('mongoose');

var designEquipmentSchema = mongoose.Schema({
    usermail: {type: String, required: true},
    username: {type:String, required: true},
    userContact: {type: String, required: true},
    productDescription: {type: String, required: true},
    equipmentName: {type: String, required: true},
    equipmentDimenstion: {type: String, required: true}
},{
    collection: 'designEquipment'
});

var designEquipment = mongoose.model('designEquipment', designEquipmentSchema);
module.exports = designEquipment;