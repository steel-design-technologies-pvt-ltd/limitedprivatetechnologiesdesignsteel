var mongoose = require('mongoose');

var designArchitecturalAreaSchema = mongoose.Schema({
    usermail: {type: String, required: true},
    username: {type:String, required: true},
    userContact: {type: String, required: true},
    productDescription: {type: String, required: true},
    planningAreaName: {type: String, required: true},
    areaDimension: {type: String, required: true}
},{
    collection: 'designArchitecturalArea'
});

var designArchitecturalArea = mongoose.model('designArchitecturalArea', designArchitecturalAreaSchema);
module.exports = designArchitecturalArea;