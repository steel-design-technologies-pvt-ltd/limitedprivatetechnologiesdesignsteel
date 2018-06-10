(function(){
	var appModule = angular.module('appModule');
	appModule.controller('landingPageController',['$scope','landingPageService','logService',function($scope,landingPageService,logService){
		console.log('add update delete content of landing page');
		var logoReferenceAtDeletion = '';
		var logoPath = {}
		var navigationObject = {};

		$scope.uploadLogo = function(){			
			var logoPathPrefix = './images/home/website-logo/';
			
			logoPath.logoImagePath = logoPathPrefix + $scope.logoImage.name;		
			var file = $scope.logoImage;
			var fd = new FormData();
			fd.append('file',file);
			landingPageService.uploadLogo(fd).then(
				function(response){
					logService.success('landingPageService.uploadLogo()',response);
				},
				function(response){
					logService.failed('landingPageService.uploadLogo()',response);
				}
			);
//###########################################################################################			
/*wiping out the collection from DB and the existing logo-directory */
//###########################################################################################
			landingPageService.removeExistingLogo().then(
				function(response){
					logService.success('landingPageService.removeExistingLogo()',response);
				},
				function(response){
					logService.failed('landingPageService.removeExistingLogo()',response);
				}
			);
			landingPageService.emptyLogoDirectory({'directoryPath' : '/app/public/images/home/website-logo'});
//###########################################################################################			
/*adding the uploaded image to the database*/
//###########################################################################################
			siteNavigation.json.addLogoPathToDb(logoPath).then(
				function(response){
					logoPath = {};// clear the form data so that new value can be entered
					$scope.responseData = response.data;					
					logService.success('landingPageService.addLogoPathToDb()',response);
				},
				function(response){					
					logService.failed('landingPageService.addLogoPathToDb()',response);
				}
			);
		}

//###########################################################################################			
/* get the navigation link and update navigation object*/
//###########################################################################################
			landingPageService.getNavigationList().then(
				function(response){
					$scope.navigationObject = response.data;
					//console.log($scope.navigationObject);
					logService.success('landingPageService.getOrUpdateNavigationList()',response);
				},
				function(response){					
					logService.failed('landingPageService.getOrUpdateNavigationList()',response);
				}
			);

	}]);
})();