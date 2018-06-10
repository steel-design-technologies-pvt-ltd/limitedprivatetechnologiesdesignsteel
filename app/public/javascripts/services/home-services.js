(function(){
    var appModule = angular.module('appModule');
    appModule.factory('homeService',['$http','$q','productPathConstants',function($http, $q, productPathConstants){
        return{
            getSliderData : requestForSliderData
        }
        function requestForSliderData(){
            return $http.get(productPathConstants.SLIDER_DATA)
            then(function(response){
                if(typeof response.data === 'object'){
                    return response.data;
                }else{
                   return $q.reject(response.data);
                }
            },function(response){
                return $q.reject(response.data);
            });
        }
    }]);
})();