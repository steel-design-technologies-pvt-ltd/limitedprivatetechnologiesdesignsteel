(function(){
	var appModule = angular.module('appModule');
	appModule.controller('productDescriptionController',['$scope','$stateParams','productDescriptionServices', 'growl', 'errorConstants',function($scope,$stateParams, productDescriptionServices, growl, errorConstants){
		console.log($stateParams.productId);
		$scope.productId = {};
		$scope.productId.id = $stateParams.productId;
		productDescriptionServices.getTheProductDecription($scope.productId)
		.success(function(data){
			console.log(data);
			$scope.productDescription = data;
		})
		.error(function(){
			console.log('there was some error in fetching product details');
			growl.error(errorConstants.PRODUCT_DESC_PAGE.ERROR.DESCRIPTION,{'title': errorConstants.TITLE});
		});
	}]);
})();