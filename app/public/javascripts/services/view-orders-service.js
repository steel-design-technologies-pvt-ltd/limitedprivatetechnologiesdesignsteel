(function(){
	var appModule = angular.module('appModule');
	appModule.service('viewOrderService',['$http', 'productPathConstants', 'growl',function($http, productPathConstants, growl){
		return{
			getOrderDetails: getOrderDetails,
			getSellEquipmentOrderDetails: getSellEquipmentOrderDetails,
			getDesignEquipmentOrderDetails: getDesignEquipmentOrderDetails,
			getArchDesignOrderDetails: getArchDesignOrderDetails,
			getModularKitchenOrdersDetails: getModularKitchenOrdersDetails,
			deleteAnOrder: deleteAnOrder,

		}

		function getOrderDetails () {
			try{
				return $http.get(productPathConstants.ORDER_DETAILS);
			} catch (error) {
				console.log('could not fetch order details',error)
			}
		};

		function getSellEquipmentOrderDetails () {
			try{
				return $http.get(productPathConstants.SELL_EQUIPMENT_ORDER);
			} catch (error) {
				console.log('could not fetch order details',error)
			}
		};

		function getDesignEquipmentOrderDetails () {
			try{
				return $http.get(productPathConstants.DESIGN_EQUIPMENT_ORDERS);
			} catch (error) {
				console.log('could not fetch design equipment requests details',error)
			}
		}
		function getArchDesignOrderDetails () {
			try{
				return $http.get(productPathConstants.ARCHI_MEP_ORDERS);
			} catch (error) {
				console.log('could not fetch architectural design for layout requests',error)
			}
		}

		function getModularKitchenOrdersDetails () {
			try{
				return $http.get(productPathConstants.MODULAR_KITCHEN_ORDERS);
			} catch (error) {
				console.log('could not fetch moduklar kitchen order requests',error)
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