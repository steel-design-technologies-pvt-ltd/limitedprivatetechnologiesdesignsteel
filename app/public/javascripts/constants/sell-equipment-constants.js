(function(){
    var appModule = angular.module('appModule');
    appModule.constant('sellEquipmentConstants',{
        "sellNotification": "The company who wants to sell their equipment on our website, must be registered as per Govt of India <br> Note: This service is free of cost",
        'sellEquipmentForm': {
            "mailLabel": "Email address",
            "usernameLabel": "Username",
            "contactLabel": "Contact no",
            "companyNameLabel": "Firm / Company Name",
            "descriptionLabel": "Product brief description",
            "buttonLabel": "Submit Your Details"
        }
    });
})();