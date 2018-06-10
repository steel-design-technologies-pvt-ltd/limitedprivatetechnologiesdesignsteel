(function(){
    var appModule = angular.module('appModule');
    appModule.constant('appConstants',{
        'REQUEST_EQUIPMENT_DESIGN': '/app/designEquipment',
        'REQUEST_ARCHITECTURAL_DESIGN': '/app/designArchitecturalArea',
        'REQUEST_KITCHEN_DESIGN': '/app/designCommercialKitchen'
    });
})();