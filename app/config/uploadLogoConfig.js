/*############################################################################################
*	Below configuration sets the destination of the image to be uploaded.	
* ############################################################################################*/

var multer = require('multer');
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './app/public/images/home/website-logo/');// the path root starts from the node file location
  },
  filename: function (req, file, callback) {  	
    callback(null, file.originalname);// takes the original name of the file to save
  }
});
var upload = multer({ 
	storage : storage,
	limits : {fileSize : '4MB'}
}).single('file');
module.exports = upload;