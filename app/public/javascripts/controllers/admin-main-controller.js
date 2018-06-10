(function(){
	var appModule = angular.module('appModule');
	appModule.controller('adminMainController',['$scope','logService','adminTabService',function($scope,logService,adminTabService){
        $scope.adminTabs = [];
        // when landing on the admin jome page, get all navigation options and show them
        adminTabService.get().then(
            function(response) {
                $scope.todos = response.data;
                logService.success('adminTabService.get()', response);
            }, 
            function(response) {
                logService.failed('adminTabService.get()', response);
            }
        );
    }]);
})();