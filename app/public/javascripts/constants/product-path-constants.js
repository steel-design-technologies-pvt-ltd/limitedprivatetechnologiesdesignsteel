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
        'DELETE_ORDER':'/app/admin/deleteAnOrder/:deleteId'
    });
})();