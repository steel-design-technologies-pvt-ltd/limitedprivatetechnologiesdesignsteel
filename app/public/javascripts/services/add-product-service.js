(function(){
	var appModule = angular.module('appModule');
	appModule.factory('addProductService',['$http', 'productPathConstants',function($http, productPathConstants){
		return {
			addProduct : addProductToDb,
			uploadProductImage : imageUploader
		}

		function addProductToDb(productData){
			console.log(productPathConstants.ADD_PRODUCT_TO_DB);
			return $http.post(productPathConstants.ADD_PRODUCT_TO_DB ,productData);
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