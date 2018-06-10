var mongoose = require('mongoose');

var sellEquipmentSchema = mongoose.Schema({
    username: {type:String,required:true},
    userContact: {type:String,required:true},
    userCompanyName: {type:String,required:true},
    productDescription: {type:String,required:true}
},{
    collection: 'sellEquipment'
});

var sellEquipment = mongoose.model('sellEquipment', sellEquipmentSchema);
module.exports = sellEquipment;