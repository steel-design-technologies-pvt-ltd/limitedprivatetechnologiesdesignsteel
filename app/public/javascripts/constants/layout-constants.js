(function(){
    var appModule = angular.module('appModule');
    appModule.constant('layoutConstants',{
        "siteHeading": {
            "text": "SteelDesignTechnology",
            "link": "home"
        },
        "navbarOptionsLeft": [{
            "navtext": "Buy Online Equipments",
            "navLink": "equipments"
        },{
            "navtext": "Sell Your Equipments",
            "navLink": "sellEquipment"
        },{
            "navtext": "Design Equipment",
            "navLink": "designEquipment"
        },{
            "navtext": "Architectural/ MEP services",
            "navLink": "architecturalDesign"
        },{
            "navtext": "Design Modular Kitchen",
            "navLink": "kitchenDesignServices"
        }],
        "navbarOptionsRight": [{
            "navtext": "About Us",
            "navLink": "aboutus"
        },{
            "navtext": "Contact Us",
            "navLink": "contactus"
        }],
        "functionalAreaList": [
            "Architect layout planing for home ,restaurant &amp; food service projects with facility planing",
            "Design &amp; development of S.S./M.S. equipment/shop drawing as per requirement in hospitality projects/home/industries purpose",
            "S.S. modular kitchen design &amp; fabrication",
            "Online buying &amp; selling of food service /Commercial kitchen equipment"
        ],
        "copyrightText": "SteelDesignTechnology. All Rights Reserved",
        "privacyLink": {
            "linkText": "Privacy Policy & FAQs",
            "link": "privacyNfaq"
        }
    });
})();