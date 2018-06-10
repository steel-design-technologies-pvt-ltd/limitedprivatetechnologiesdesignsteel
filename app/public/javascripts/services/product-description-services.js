(function(){
    var appModule = angular.module('appModule');
    appModule.factory('productDescriptionServices',['$http', 'productPathConstants',function($http, productPathConstants){
        return{
            getTheProductDecription : getTheProductDecription 
         }
        function getTheProductDecription(productId){
            //return $http.get(productPathConstants.SINGLE_PRODUCT, productId);
            return $http({
                url: productPathConstants.SINGLE_PRODUCT,
                method: 'GET',
                params: productId
            });
         }
    }]);
})();