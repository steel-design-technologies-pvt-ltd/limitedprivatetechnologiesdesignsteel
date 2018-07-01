(function(){
	var appModule = angular.module('appModule');
	appModule.service('viewOrderService',['$http', 'productPathConstants', 'growl',function($http, productPathConstants, growl){
		return{
			getOrderDetails: getOrderDetails,
			deleteAnOrder: deleteAnOrder
		}

		function getOrderDetails () {
			try{
				return $http.get(productPathConstants.ORDER_DETAILS);
			} catch (error) {
				console.log('could not fetch order details',error)
			}
		};

		function deleteAnOrder (data) {
			try{
				return $http.delete(productPathConstants.DELETE_ORDER+data._id);
			} catch (err) {
				console.log('unable to delete this order');
			}
		}
	}]);
})();