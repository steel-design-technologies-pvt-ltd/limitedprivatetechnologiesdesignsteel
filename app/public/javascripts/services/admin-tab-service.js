(function(){
	var appModule = angular.module('appModule');
	// each function returns a promise object	
	appModule.factory('adminTabService',['$http',function($http){
		return {
            get: function() {
                return $http.get('/app/admin');
            }
        }
	}]);
})();