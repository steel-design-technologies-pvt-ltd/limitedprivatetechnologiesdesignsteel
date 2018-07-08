(function(){
    var appModule = angular.module('appModule');
    appModule.constant('layoutConstants',{
        "siteHeading": {
            "text": "SteelDesignTechnology",
            "link": "home"
        },
        "navbarOptionsLeft": [{
            "navtext": "Buy Equipment",
            "navLink": "equipments"
        },{
            "navtext": "Sell Equipment",
            "navLink": "sellEquipment"
        },{
            "navtext": "Design Equipment",
            "navLink": "designEquipment"
        },{
            "navtext": "Design Kitchen/MEP Service",
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
            "Architect layout planning for restaurant and food service projects with facility planning.",
            "Design and development of S.S./M.S. equipment/shop drawing as per requirement in hospitality projects/home/industrial purpose.",
            "S.S. modular kitchen design and fabrication.",
            "Online buying and selling of food service/Kitchen equipment."
        ],
        "copyrightText": "SDT SteelDesign Pvt Ltd. All Rights Reserved",
        "privacyLink": {
            "linkText": "Privacy Policy & FAQs",
            "link": "privacyNfaq"
        }
    });
})();