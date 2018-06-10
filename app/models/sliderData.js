var mongoose = require('mongoose');
var sliderDataSchema = mongoose.Schema({
    slideId : {type: Number, required: true},
    dataTarget: {type: String, required: true},
    imageUrl: {type: String, required: true},
    imageAltText: {type: String, required: true},
    slideHeading: {type: String, required: true},
    slideDescription: {type: String, required: true}
},{
    collection: 'sliderData'
});

var sliderData = mongoose.model('sliderData', sliderDataSchema);
module.exports = sliderData;