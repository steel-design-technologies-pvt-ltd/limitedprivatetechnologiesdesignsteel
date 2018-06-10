(function () {
    var appModule = angular.module('appModule');
    appModule.factory('sellEquipmentsService', ['$http','productPathConstants',function ($http, productPathConstants) {
        return {
            saveSellingDetails: saveSellingDetails
        }

        function saveSellingDetails(data) {
            return $http.post(productPathConstants.SELL_EQUIPMENT, data);
        }
    }]);
})();