(function () {
    var appModule = angular.module('appModule');
    appModule.constant('buyEquipmentConstants', {
        "pageHeading": "Products Available",
        "default_filter_category": "REST_EQUI",
        "filterSection": {
            "heading": "Product Categories",
            categoryList: [
                {
                    "filter-text": "Hotel/Restaurant Equipment",
                    "filter-code": "REST_EQUI"
                }, {
                    "filter-text": "Food service (trolley) Equipment",
                    "filter-code": "FOOD_TROLLEY_EQUI"
                }, {
                    "filter-text": "Market Item (Indian Brand)",
                    "filter-code": "MARKET_EQUI"
                }, {
                    "filter-text": "Equipment For Retailers",
                    "filter-code": "RETAILER_EQUI"
                }, {
                    "filter-text": "Important Equipment",
                    "filter-code": "IMPORTANT_EQUI"
                }, {
                    "filter-text": "Under Rs.5000 Equipment",
                    "filter-code": "BELOW_5000_EQUI"
                },
            ]
        },
        "offerSection": "Active Offers"
    });
})();