(function(){
    var appModule = angular.module('appModule');
    appModule.constant('productPathConstants',{
        'ALL_PRODUCTS': '/app/allProducts',
        'SINGLE_PRODUCT': '/app/getProductDetails',
        'SAVE_USER_DETAIL': '/app/placeUserOrder',
        'SELL_EQUIPMENT': '/app/sellEquipment',
        'SLIDER_DATA': '/app/getSliderData',
        'ADD_PRODUCT_TO_DB': '/app/admin/addProductToDB',
        'PRODUCT_FOR_UPDATE': '/app/admin/productForUpdate',
        'UPDATE_PRODUCT': '/app/admin/updateProduct',
        'UPDATE_PRODUCT_AVAILABILITY': '/app/updateProductAvailability',
        'ORDER_DETAILS': '/app/admin/viewOrders',
        'SELL_EQUIPMENT_ORDER': '/app/admin/viewSellingEquipmentRequest',
        'DESIGN_EQUIPMENT_ORDERS':'/app/admin/viewDesignEquipmentRequest',
        'ARCHI_MEP_ORDERS':'/app/admin/viewArchPlanningRequest',
        'MODULAR_KITCHEN_ORDERS':'/app/admin/viewModularKitchenRequest',
        'DELETE_ORDER':'/app/admin/deleteAnOrder'
    });
})();