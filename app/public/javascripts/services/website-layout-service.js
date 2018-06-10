(function(){
	var appModule = angular.module('appModule');
	appModule.service('websiteLayoutService',['$http',function($http){
		return{
			// getLogoData : getLogoDataFromDB
		}
		// function getLogoDataFromDB(){
		// 	return $http.get('/app/websiteViews/getLogoData');
		// }
	}]);
})();