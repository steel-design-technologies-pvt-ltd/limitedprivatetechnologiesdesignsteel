(function(){
    var appModule = angular.module('appModule');
    appModule.factory('placeOrderService',['$http','productPathConstants',function($http, productPathConstants){
        var username = '';
        var usermail = '';
        var userContact = 0;
        return{
            setUserDetail: setTheUserDetails,
            saveUserDetails: saveUserDetails,
            updateProductAvailability: updateProductAvailability
        }
        function setTheUserDetails(data){
            username = data.name;
            usermail = data.mail;
            userContact = data.contact;
        }
        function getTheUserDetails(){
            return {
                name : username,
                mail : usermail,
                contact : userContact
            }
        }
        function saveUserDetails(userDetails){
            return $http.post(productPathConstants.SAVE_USER_DETAIL, userDetails);
        }
        function updateProductAvailability(productToMarkSold){
            console.log(productToMarkSold);
            return $http.put(productPathConstants.UPDATE_PRODUCT_AVAILABILITY, {productID: productToMarkSold.productID});
        }
    }]);
})();