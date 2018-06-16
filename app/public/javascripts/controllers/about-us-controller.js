(function(){
	var appModule = angular.module('appModule');
	appModule.controller('aboutusController',['$scope', '$sce', 'aboutusConstants',function($scope, $sce,aboutusConstants){
		console.log('this is about us module');
		$scope.AUStaticData = aboutusConstants;
	}]);
})();