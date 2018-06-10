(function(){
	var appModule = angular.module('appModule');
	appModule.controller('kitchenDesignController',['$scope', 'kitchenDesignConstants', function ($scope, kitchenDesignConstants) {
			$scope.KDStaticData = kitchenDesignConstants;
			console.log('this is design concept page');
			$scope.requestDesignType = 'commercialKitchen';
	}]);
})();