(function(){
	var appModule = angular.module('appModule');
	appModule.controller('usageCategoryController',['$scope','$stateParams','usageCategoryService', 'buyEquipmentConstants', 'errorConstants', 'growl',function($scope, $stateParams, usageCategoryService, buyEquipmentConstants, errorConstants, growl){
		$scope.buyEquipmentStaticData = buyEquipmentConstants;
		usageCategoryService.getProductList()
		.success(function(data){
				console.log(data);
				$scope.productList = data;
			})
			.error(function(){
				growl.error(errorConstants.ALL_PRODUCT_PAGE.ERROR.DESCRIPTION, {title: errorConstants.ALL_PRODUCT_PAGE.ERROR.TITLE});
			});
	}]);
})();