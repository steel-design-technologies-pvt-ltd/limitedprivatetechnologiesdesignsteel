(function(){
	var appModule = angular.module('appModule');
	appModule.controller('homeController',['$scope', 'homeService', 'homeConstants','growl','errorConstants', function($scope, homeService, homeConstants, growl, errorConstants){
		
		console.log('this is home module');
		$scope.homeStaticData = homeConstants;
		homeService.getSliderData().then(function(response){
			$scope.sliderData = response.data;
		},function(error){
			growl.error(errorConstants.HOME_PAGE.ERROR.DESCRIPTION ,{'title': errorConstants.TITLE});
		});
	}]);
})();