(function () {
    var appModule = angular.module('appModule');
    appModule.controller('thanksController', ['$scope','$location',function ($scope, $location) {
        $scope.buyEquipmentpage = function () {
            $location.path('/home');
        }
    }]);
})();