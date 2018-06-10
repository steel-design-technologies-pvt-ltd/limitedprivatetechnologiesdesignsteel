(function(){
	var appModule = angular.module('appModule');
	appModule.controller('architecturalPlanningController',['$scope', 'architecturalDesignConstants',function($scope, architecturalDesignConstants){
			$scope.ADStaticData = architecturalDesignConstants;
			console.log('this is design concept page');
			$scope.requestDesignType = 'planningArea';
	}]);
})();