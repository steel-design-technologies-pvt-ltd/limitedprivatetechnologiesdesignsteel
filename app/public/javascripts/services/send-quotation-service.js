(function(){
	var appModule = angular.module('appModule');
	appModule.factory('sendQuotationService',['$http',function($http){
		return {
			userDetails : credentialsProvider,
			sendQuotation : quotationProvider
		};
		function credentialsProvider(){			
			return $http.get('/app/sendGridCredentials');
		}
		function quotationProvider(quotationData){			
			return $http.post('/app/product/sendQuotationToEmail',quotationData)
		}
	}]);
})();