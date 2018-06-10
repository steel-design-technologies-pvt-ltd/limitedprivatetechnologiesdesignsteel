(function(){
	var appModule = angular.module('appModule');
	appModule.service('landingPageService',['$http',function($http){
		return {
			uploadLogo : uploadWebsiteLogo,
			addLogoPathToDb : sendLogoToDb,
			removeExistingLogo : deleteLogo,
			emptyLogoDirectory : emptyLogoDirectoryFromSystem,
			getNavigationList : getNavigationList
		}

		function uploadWebsiteLogo(logoImageFile){
			return $http.post('/app/admin/landingPage/addLogoImage',logoImageFile,{
				transformRequest: angular.identity,
				headers: {'Content-Type': undefined}
			})
			.success(function(){
				console.log("success!!");
			})
			.error(function(){
				console.log("error!!");
			});
		}
		function sendLogoToDb(logoImageObject){
			console.log(logoImageObject);
			return $http.post('/app/admin/addLogo',logoImageObject);
		}
		function deleteLogo(){
			return $http.post('app/admin/deleteLogo');
		}
		function emptyLogoDirectoryFromSystem(directoryPath){
			return $http.post('app/admin/deleteLogoDirectory',directoryPath);	
		}
		function getNavigationList(){
			return $http.get('data/siteNavigation.json').success(function(){
			console.log("success!!");
			})
			.error(function(){
				console.log("error!!");
			});
		}

	}]);
})();