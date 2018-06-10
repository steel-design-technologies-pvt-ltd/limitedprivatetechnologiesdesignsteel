(function(){
    var appModule = angular.module('appModule');
    appModule.factory('requestDesignService',['$http',function($http){
        return{
            requestDesignData : saveRequestDesignData
        }
        function saveRequestDesignData(url, data){
            console.log(url, data);
            return $http.post(url, data);
        }
    }]);
})();