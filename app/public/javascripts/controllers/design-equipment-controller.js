(function(){
	var appModule = angular.module('appModule');
	appModule.controller('designEquipmentController',['$scope', 'designEquipmentConstants',function($scope, designEquipmentConstants){
			console.log('this is design concept page');
			$scope.designEquipmentStaticData = designEquipmentConstants;
			$scope.requestDesignType = 'designEquipment';
	}]);
})();