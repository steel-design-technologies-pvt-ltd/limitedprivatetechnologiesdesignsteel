(function(){
	var appModule = angular.module('appModule');
	appModule.controller('usageCategoryController',['$scope','$stateParams','usageCategoryService', 'buyEquipmentConstants', 'errorConstants', 'growl',function($scope, $stateParams, usageCategoryService, buyEquipmentConstants, errorConstants, growl){
		var that = this, allProducts;
		$scope.buyEquipmentStaticData = buyEquipmentConstants;
		usageCategoryService.getProductList()
		.success(function(data){
				console.log(data);
				allProducts = data;
				$scope.filterData("REST_EQUI");
			})
			.error(function(){
				growl.error(errorConstants.ALL_PRODUCT_PAGE.ERROR.DESCRIPTION, {title: errorConstants.ALL_PRODUCT_PAGE.ERROR.TITLE});
			});

			 $scope.filterData = function (filterString) {
				var filteredData = [];
				allProducts.forEach (function (product) {
					if (filterString === product.productCategory) {
						filteredData.push(product);
					}
					if(filteredData.length){
						$scope.productList = filteredData;
					}
				});
			}
	}]);
})();