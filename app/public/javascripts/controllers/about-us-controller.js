(function(){
	var appModule = angular.module('appModule');
	appModule.controller('aboutusController',['$scope', 'aboutusConstants',function($scope, aboutusConstants){
		console.log('this is about us module');
		$scope.AUStaticData = aboutusConstants;
	}]);
})();