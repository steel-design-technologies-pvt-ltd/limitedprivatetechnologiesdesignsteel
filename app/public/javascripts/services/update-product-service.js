(function () {
    var appModule = angular.module('appModule');
    appModule.factory('updateProductService', ['$http', 'productPathConstants', function ($http, productPathConstants) {
        return {
            getProductToUpdate: getProductToUpdate,
            updateProduct: updateProduct
        };
        function getProductToUpdate (data) {
            return $http.post(productPathConstants.PRODUCT_FOR_UPDATE, {productID: data});
        }
        function updateProduct (data) {
            return $http.put(productPathConstants.UPDATE_PRODUCT, data);
        }
    }]);
})();