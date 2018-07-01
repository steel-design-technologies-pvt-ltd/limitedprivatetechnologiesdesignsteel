(function(){
    var appModule = angular.module('appModule',['ui.router', 'ngFileUpload', 'cloudinary', 'angular-growl']);
     appModule.config(['$stateProvider', '$urlRouterProvider', 'CloudinaryProvider', function ($stateProvider, $urlRouterProvider, CloudinaryProvider, growl) {

        CloudinaryProvider.configure({
            cloud_name: 'ddzmveje0',
            api_key: '127232394336786'
        });

        var websiteLayout = {
            name: 'layout',
            url: '/',
            templateUrl: 'views/layout/_websiteLayout.html',
            controller : 'websiteLayoutController'
        }
        var landingPage = {
            name: 'layout.home',
            url: 'home',
            parent : 'layout',
            templateUrl: 'views/websiteViews/home.html',
            controller : 'homeController'      
        }
        var equipments = {
            name : 'layout.equipments',
            url : 'home/equipments',
            parent : 'layout',
            templateUrl : 'views/websiteViews/usageCategory.html',
            controller : 'usageCategoryController'
        } 
        var sellEquipment = {
            name: 'layout.sellEquipment',
            url: 'home/sellEquipments',
            parent: 'layout',
            templateUrl: 'views/websiteViews/sell-equipments.html',
            controller: 'sellEquipmentController'
        }       
        var productDesciption= {
            name : 'layout.equipments.productDesciption',
            url : '/:productId',
            parent : 'layout.equipments',
            templateUrl : 'views/websiteViews/productDesciption.html',
            controller : 'productDescriptionController'
        }
        var designEquipment = {
            name : 'layout.designEquipment',
            url : 'home/designEquipment',  
            parent : 'layout',          
            templateUrl : 'views/websiteViews/designEquipment.html',
            controller : 'designEquipmentController'
        }
        var architecturalDesign = {
            name: 'layout.architecturalDesign',
            url : 'home/architecturalDesign',
            parent: 'layout',
            templateUrl: 'views/websiteViews/architecturalDesign.html',
            controller : 'architecturalPlanningController'
        }

        var kitchenDesign = {
            name : 'layout.kitchenDesignServices',
            url : 'home/kitchenDesignServices',  
            parent : 'layout',          
            templateUrl : 'views/websiteViews/kitchenDesign.html',
            controller : 'kitchenDesignController'
        }

        var contactus = {
            name : 'layout.contactus',
            url : 'contactus',  
            parent : 'layout',            
            templateUrl : 'views/websiteViews/contactus.html',
            controller : 'sendQuotationController'
        }
        var aboutus = {
            name : 'layout.aboutus',
            url : 'aboutus',    
            parent : 'layout',          
            templateUrl : 'views/websiteViews/aboutus.html',
            controller : 'aboutusController'
        }
        var privacyNfaq = {
            name: 'layout.privacyNfaq',
            url: 'privacy',
            parent: 'layout',
            templateUrl: 'views/websiteViews/privacyNfaq.html',
            controller: 'privacyController'
        }
        var thanks = {
            name: 'layout.thanks',
            url: 'home/thanks.html',
            parent: 'layout',
            templateUrl: 'views/websiteViews/thanks.html',
            controller: 'thanksController'
        }
        var admin = {
            name: 'admin',
            url: '/technologies-sdt-admin-page',        
            templateUrl: 'views/adminViews/home.html',
            controller : 'adminMainController'
        }
        var landing = {
            name : 'admin.landing',
            url : '/landingPage',
            parent : 'admin',
            templateUrl : 'views/adminViews/landing-page.html',
            controller : 'landingPageController'
        }
        var addProduct = {
            name : 'admin.addProduct',
            url : '/addProduct',
            parent : 'admin',
            templateUrl : 'views/adminViews/add-product.html',
            controller : 'addProductController'
        }
        var updateProduct = {
            name: 'admin.updateProduct',
            url: '/updateProduct',
            parent: 'admin',
            templateUrl: 'views/adminViews/update-product.html',
            controller: 'updateProductController'
        };

        var viewOrders = {
            name: 'admin.viewOrders',
            url: '/viewOrders',
            parent: 'admin',
            templateUrl: 'views/adminViews/view-orders.html',
            controller: 'viewOrdersController'
        }

        $stateProvider.state(websiteLayout);
        $stateProvider.state(landingPage);
        $stateProvider.state(equipments);
        $stateProvider.state(sellEquipment);
        $stateProvider.state(productDesciption);        
        $stateProvider.state(designEquipment);
        $stateProvider.state(architecturalDesign);
        $stateProvider.state(kitchenDesign);
        $stateProvider.state(contactus);
        $stateProvider.state(aboutus);
        $stateProvider.state(privacyNfaq);
        $stateProvider.state(thanks);
        $stateProvider.state(admin);
        $stateProvider.state(landing);
        $stateProvider.state(addProduct);
        $stateProvider.state(updateProduct);
        $stateProvider.state(viewOrders);
        $urlRouterProvider.when('', 'home');
        $urlRouterProvider.otherwise('home');
    }]);
})();