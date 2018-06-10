var mongoose = require('mongoose');
var credentialsSchema = mongoose.Schema(
	{
		username : {type : String , required : true},
		api_key : {type : String , required : true}		
	}
);
var credentials = mongoose.model('credentials' , credentialsSchema);
module.exports = credentials;