var mongoose = require('mongoose');
var logoSchema = mongoose.Schema(
	{
		logoImagePath : {type : String , required : true}		
	}
);
var logo = mongoose.model('logo' , logoSchema);
module.exports = logo;