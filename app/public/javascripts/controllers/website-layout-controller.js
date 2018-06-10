(function(){
	var appModule = angular.module('appModule');
	appModule.controller('websiteLayoutController',['$scope','websiteLayoutService','logService', 'layoutConstants', '$rootScope', 'growl','errorConstants', function($scope, websiteLayoutService, logService, layoutConstants, $rootScope, growl, errorConstants){
		$scope.logoData = '';
		$scope.staticDataText = layoutConstants;
		// websiteLayoutService.getLogoData().then(
		// 		function(response){			
		// 			$scope.logoData = response.data;							
		// 			logService.success('websiteLayoutService.getLogoData()',response);
		// 		},
		// 		function(response){					
		// 			logService.failed('websiteLayoutService.getLogoData()',response);
					
		// 		}
		// 	);	
	}]);
})();