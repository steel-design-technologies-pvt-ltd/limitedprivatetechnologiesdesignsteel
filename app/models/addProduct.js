var mongoose = require('mongoose');
var productSchema = mongoose.Schema(
	{
		name: {type: String, required: false},
		productImageURL : {type : String , required : false},
		productID: {type: String, required: false},
		productCode: {type:String, required:false},
		length: {type: Number, required: false},
		width: {type: Number, required: false},
		height: {type: Number, required: false},
		built_material: {type: String, required: false},
		application: {type: String, required: false},
		construction_details: {type: [String], required:false},
		productPrice : {type : Number , required : false},
		vendorID: {type: String, required: false},
		productAvailability: {type: String, required:false},
		availabilityType: {type: String, required:false},
		isProductSold: {type: Boolean,required: false},
		quantity: {type: Number, required: false},
		warranty: {type: Number, required: false},
		rating: {type: Number, required: false},
		deliveryTime: {type: String, required:false},
		paymentMode: {type: String, required: false},
		special_req: {type: [String], required: false}
	},{ collection: 'product' }
);
var product = mongoose.model('product' , productSchema);
module.exports = product;