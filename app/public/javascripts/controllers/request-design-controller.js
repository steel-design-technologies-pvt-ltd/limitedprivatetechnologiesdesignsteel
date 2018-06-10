(function(){
    var appModule = angular.module('appModule');
    appModule.controller('requestDesignController',['$scope','appConstants','requestDesignService', '$location', 'growl','errorConstants',function($scope, appConstants, requestDesignService, $location, growl, errorConstants){
        $scope.submitKitchenDetails = function(data){
            if($scope.requestDesign.username.length<3 || $scope.requestDesign.userContact.length!=10){
                growl.error('The form filled has some invalid values, please correct them' ,{title: errorConstants.TITLE});
                return null;
            }
            if($scope.requestDesignType==='designEquipment'){
                if($scope.requestDesign.equipmentName.length<3){
                    growl.error('The form filled has some invalid values, please correct them to proceed' ,{title: errorConstants.TITLE});
                    return null;
                }
                requestDesignService.requestDesignData(appConstants.REQUEST_EQUIPMENT_DESIGN, data).then(function (response){
                    console.log(response);
                    $scope.requestDesign = null;
                    setTimeout(function () {
                        $location.path('/home/thanks.html');
                        $scope.$apply();
                    }, 1000);
                }, function (error) {
                    growl.error(errorConstants.REQ_EQUIPMENT_DESIGN.ERROR.DESCRIPTION ,{title: errorConstants.TITLE});
                });
            } else if($scope.requestDesignType==='planningArea'){
                if($scope.requestDesign.planningAreaName.length<3){
                    growl.error('The form filled has some invalid values, please correct them to proceed' ,{title: errorConstants.TITLE});
                    return null;
                }
                requestDesignService.requestDesignData(appConstants.REQUEST_ARCHITECTURAL_DESIGN, data).then(function (response){
                    console.log(response);
                    $scope.requestDesign = null;
                    setTimeout(function () {
                        $location.path('/home/thanks.html');
                        $scope.$apply();
                    }, 1000);
                }, function (error) {
                    growl.error(errorConstants.ARCH_DESIGN.ERROR.DESCRIPTION ,{title: errorConstants.TITLE});
                });
            } else if($scope.requestDesignType==='commercialKitchen'){
                if($scope.requestDesign.planningKitchenName.length<3){
                    growl.error('The form filled has some invalid values, please correct them to proceed' ,{title: errorConstants.TITLE});
                    return null;
                }
                requestDesignService.requestDesignData(appConstants.REQUEST_KITCHEN_DESIGN, data).then(function (response){
                    console.log(response);
                    $scope.requestDesign = null;
                    setTimeout(function () {
                        $location.path('/home/thanks.html');
                        $scope.$apply();
                    }, 1000);
                }, function (error) {
                    growl.error(errorConstants.KITCHEN_DESIGN.ERROR.DESCRIPTION ,{title: errorConstants.TITLE});
                });
            }
        }
    }]);
})();