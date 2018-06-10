(function(){
	var appModule = angular.module('appModule');
	appModule.controller('sendQuotationController',['$scope','sendQuotationService','logService', 'contactusConstants',function($scope, sendQuotationService, logService, contactusConstants){
		console.log('this is quotation controller');
		$scope.CUStaticData = contactusConstants;
		//#############################
		//variables
		//############################
		$scope.quotationData = {};
		$scope.credentials = [];

		//#############################
		//functions
		//############################
		sendQuotationService.userDetails().then(
				function(response){
					$scope.credentials = response.data;					
					logService.success('sendQuotationService.userDetails()',response);					
				},
				function(response){
					logService.failed('sendQuotationService.userDetails()',response);
				}
			);				
		$scope.sendQuotation = function(){
			$scope.quotationData.key = 	$scope.credentials[0].key;
			$scope.quotationData.username = $scope.credentials[0].username;
			console.log($scope.quotationData);
			sendQuotationService.sendQuotation($scope.quotationData);

		};

	}]);
})();