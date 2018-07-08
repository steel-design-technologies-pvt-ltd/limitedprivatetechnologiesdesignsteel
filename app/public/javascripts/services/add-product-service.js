(function(){
	var appModule = angular.module('appModule');
	appModule.factory('addProductService',['$http', 'productPathConstants',function($http, productPathConstants){
		return {
			addProduct : addProductToDb,
			uploadProductImage : imageUploader
		}

		function addProductToDb(productData){
			console.log(productPathConstants.ADD_PRODUCT_TO_DB);
			try{
				return $http.post(productPathConstants.ADD_PRODUCT_TO_DB ,productData);
			} catch (error) {
				console.log(error);
			}
		};
		function imageUploader(productPicFile){
			return $http.post('/app/admin/addProduct/productImage' ,productPicFile,{
				transformRequest: angular.identity,
				headers: {'Content-Type': undefined}
			})
			.success(function(){
				console.log("success!!");
			})
			.error(function(){
				console.log("error!!");
			});
		};
	}]);
})();