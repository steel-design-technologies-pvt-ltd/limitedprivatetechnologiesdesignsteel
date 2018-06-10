(function(){
    var appModule = angular.module('appModule');
    appModule.controller('sellEquipmentController',['$scope','sellEquipmentsService', 'sellEquipmentConstants','growl', 'errorConstants', '$location',function($scope, sellEquipmentsService, sellEquipmentConstants, growl, errorConstants, $location){
        console.log('sell equipments');
        $scope.sellEquipmentStaticData = sellEquipmentConstants;
        $scope.sellEquipmentData = function(){
            if($scope.sell.username.length<3 || $scope.sell.userCompanyName.length<3 || $scope.sell.userContact.length!=10){
                growl.error('The Form filled is not valid' ,{title: errorConstants.TITLE});
                return null;
            }

            console.log($scope.sell);
            sellEquipmentsService.saveSellingDetails($scope.sell).then(function (response) {
                if(response.status === 200){
                    console.log('your equipment details have been submitted successfully');
                    $scope.sell = null;
                    $location.path('/home/thanks.html');
                }
            },function (response) {
                growl.error(errorConstants.SELL_EQUIPMENT.ERROR.DESCRIPTION ,{title: errorConstants.TITLE});
            });
        }
    }]);
})();