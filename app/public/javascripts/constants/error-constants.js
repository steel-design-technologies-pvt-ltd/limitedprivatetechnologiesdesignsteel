(function () {
    var appModule = angular.module('appModule');
    appModule.constant('errorConstants', {
        'TITLE': 'Alert! We got error',
        'SUCCESS_TITLE': 'Success!! The request was successful.',
        'HOME_PAGE': {
            'ERROR': {
                'DESCRIPTION': 'There was some issue while fetching slider data from database'
            },
            "SUCCESS": {
                'DESCRIPTION': 'Slider data fetched from database successfully'
            }
        },
        'ALL_PRODUCT_PAGE': {
            'ERROR': {
                'DESCRIPTION': 'There was some issue while fetching products from database'
            },
            "SUCCESS": {
                'DESCRIPTION': 'Products fetched from database successfully'
            }
        },
        'PRODUCT_DESC_PAGE': {
            'ERROR': {
                'DESCRIPTION': 'There was some problem while fetching product details, Please try again after some time.'
            },
            'SUCCESS': {
                'DESCRIPTION': 'Product detail fetched.'
            }
        },
        'ORDER_PLACED': {
            'ERROR': {
                'DESCRIPTION':'There Was some error while placing your order.'
            },
            'SUCCESS': {
                'DESCRIPTION': 'This is to confirm That Your Order has been placed successfully'
            }
        },
        'USER_DETAIL_SAVED': {
            'ERROR': {
                'DESCRIPTION':'There Was some error while saving user details'
            },
            'SUCCESS': {
                'DESCRIPTION': 'This is to confirm That User details have been saved successfully'
            }
        },
        'SELL_EQUIPMENT': {
            'ERROR': {
                'DESCRIPTION':'There Was some error while saving details for sell-equipment request'
            },
            'SUCCESS': {
                'DESCRIPTION': 'This is to confirm That request have been received successfully'
            }
        },
        'REQ_EQUIPMENT_DESIGN': {
            'ERROR': {
                'DESCRIPTION':'There was some error while saving your request for equipment design'
            },
            'SUCCESS': {
                'DESCRIPTION': 'We have saved your request, we will get back to you shortly with an update'
            }
        },
        'ARCH_DESIGN': {
            'ERROR': {
                'DESCRIPTION':'There was some error while saving your request for Architectural design'
            },
            'SUCCESS': {
                'DESCRIPTION': 'We have saved your request, we will get back to you shortly with an update'
            }
        },
        'KITCHEN_DESIGN': {
            'ERROR': {
                'DESCRIPTION':'There was some error while saving your request for kitchen design'
            },
            'SUCCESS': {
                'DESCRIPTION': 'We have saved your request, we will get back to you shortly with an update'
            }
        }
    });
})();