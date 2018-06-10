(function(){
	var appModule = angular.module('appModule');
	var usageCategory = appModule.factory('usageCategoryService',['$http','productPathConstants',function($http, productPathConstants){
		return {
			getProductList: getProductList
		}
		function getProductList(){
			return $http.get(productPathConstants.ALL_PRODUCTS);
		};
	}]);
})();