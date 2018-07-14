angular.module("appModule",["ui.router","ngFileUpload","cloudinary","angular-growl"]).config(["$stateProvider","$urlRouterProvider","CloudinaryProvider",function(e,t,o,n){o.configure({cloud_name:"ddzmveje0",api_key:"127232394336786"}),e.state({name:"layout",url:"/",templateUrl:"views/layout/_websiteLayout.html",controller:"websiteLayoutController"}),e.state({name:"layout.home",url:"home",parent:"layout",templateUrl:"views/websiteViews/home.html",controller:"homeController"}),e.state({name:"layout.equipments",url:"home/equipments",parent:"layout",templateUrl:"views/websiteViews/usageCategory.html",controller:"usageCategoryController"}),e.state({name:"layout.sellEquipment",url:"home/sellEquipments",parent:"layout",templateUrl:"views/websiteViews/sell-equipments.html",controller:"sellEquipmentController"}),e.state({name:"layout.equipments.productDesciption",url:"/:productId",parent:"layout.equipments",templateUrl:"views/websiteViews/productDesciption.html",controller:"productDescriptionController"}),e.state({name:"layout.designEquipment",url:"home/designEquipment",parent:"layout",templateUrl:"views/websiteViews/designEquipment.html",controller:"designEquipmentController"}),e.state({name:"layout.architecturalDesign",url:"home/architecturalDesign",parent:"layout",templateUrl:"views/websiteViews/architecturalDesign.html",controller:"architecturalPlanningController"}),e.state({name:"layout.kitchenDesignServices",url:"home/kitchenDesignServices",parent:"layout",templateUrl:"views/websiteViews/kitchenDesign.html",controller:"kitchenDesignController"}),e.state({name:"layout.contactus",url:"contactus",parent:"layout",templateUrl:"views/websiteViews/contactus.html",controller:"sendQuotationController"}),e.state({name:"layout.aboutus",url:"aboutus",parent:"layout",templateUrl:"views/websiteViews/aboutus.html",controller:"aboutusController"}),e.state({name:"layout.privacyNfaq",url:"privacy",parent:"layout",templateUrl:"views/websiteViews/privacyNfaq.html",controller:"privacyController"}),e.state({name:"layout.thanks",url:"home/thanks.html",parent:"layout",templateUrl:"views/websiteViews/thanks.html",controller:"thanksController"}),e.state({name:"admin",url:"/technologies-sdt-admin-page",templateUrl:"views/adminViews/home.html",controller:"adminMainController"}),e.state({name:"admin.landing",url:"/landingPage",parent:"admin",templateUrl:"views/adminViews/landing-page.html",controller:"landingPageController"}),e.state({name:"admin.addProduct",url:"/addProduct",parent:"admin",templateUrl:"views/adminViews/add-product.html",controller:"addProductController"}),e.state({name:"admin.updateProduct",url:"/updateProduct",parent:"admin",templateUrl:"views/adminViews/update-product.html",controller:"updateProductController"}),e.state({name:"admin.viewOrders",url:"/viewOrders",parent:"admin",templateUrl:"views/adminViews/view-orders.html",controller:"viewOrdersController"}),e.state({name:"admin.viewSellingEquipmentOrders",url:"/sellingEquipmentOrders",parent:"admin",templateUrl:"views/adminViews/view-selling-equipment-request.html",controller:"sellingEquipmentController"}),e.state({name:"admin.viewDesignEquipmentOrders",url:"/designEquipmentOrders",parent:"admin",templateUrl:"views/adminViews/view-design-equipment-request.html",controller:"designEquipmentRequestController"}),e.state({name:"admin.viewModularKitchenOrders",url:"/modularKitchenOrders",parent:"admin",templateUrl:"views/adminViews/view-modular-kichen-request.html",controller:"modularKitchenOrdersController"}),e.state({name:"admin.viewArchDesignOrders",url:"/archDesignOrders",parent:"admin",templateUrl:"views/adminViews/view-arch-planning-request.html",controller:"archDesignRequestController"}),t.when("","home"),t.otherwise("home")}]),angular.module("appModule").controller("aboutusController",["$scope","$sce","aboutusConstants",function(e,t,o){console.log("this is about us module"),e.AUStaticData=o}]),angular.module("appModule").controller("addProductController",["$scope","addProductService","logService",function(n,a,i){console.log("add product controller"),n.response_data=[],n.uploadProductImage=function(){n.product_data.product_image="./images/products/"+n.productImage.name;var e=n.productImage,t=new FormData;t.append("file",e),a.uploadProductImage(t).then(function(e){i.success("addProductService.uploadProductImage()",e)},function(e){i.failed("addProductService.uploadProductImage()",e)})},n.addProduct=function(e){console.log(e);var t=e.construction_details.split("@"),o=e.special_req.split("@");e.construction_details=t,e.special_req=o,a.addProduct(e).then(function(e){n.product={},n.productImage="",n.responseData=e.data,i.success("addProductService.addProduct()",e)},function(e){i.failed("addProductService.addProduct()",e)})}}]),angular.module("appModule").controller("adminMainController",["$scope","logService","adminTabService",function(t,o,e){t.adminTabs=[],e.get().then(function(e){t.todos=e.data,o.success("adminTabService.get()",e)},function(e){o.failed("adminTabService.get()",e)})}]),angular.module("appModule").controller("archDesignRequestController",["$scope","viewOrderService",function(t,o){o.getArchDesignOrderDetails().then(function(e){console.log(e),t.archDesignOrders=e.data},function(e){console.log("error while fetching order details")}),t.deleteOrder=function(e){console.log(e),o.deleteAnOrder(e).then(function(e){console.log("order deleted successfully")},function(e){console.log("error while deleting order")})}}]),angular.module("appModule").controller("architecturalPlanningController",["$scope","architecturalDesignConstants",function(e,t){e.ADStaticData=t,console.log("this is design concept page"),e.requestDesignType="planningArea"}]),angular.module("appModule").controller("designEquipmentController",["$scope","designEquipmentConstants",function(e,t){console.log("this is design concept page"),e.designEquipmentStaticData=t,e.requestDesignType="designEquipment"}]),angular.module("appModule").controller("designEquipmentRequestController",["$scope","viewOrderService",function(t,o){o.getDesignEquipmentOrderDetails().then(function(e){console.log(e),t.designEquipmentOrders=e.data},function(e){console.log("error while fetching order details")}),t.deleteOrder=function(e){console.log(e),o.deleteAnOrder(e).then(function(e){console.log("order deleted successfully")},function(e){console.log("error while deleting order")})}}]),angular.module("appModule").controller("homeController",["$scope","homeService","homeConstants","growl","errorConstants",function(t,e,o,n,a){console.log("this is home module"),t.homeStaticData=o,e.getSliderData().then(function(e){t.sliderData=e.data},function(e){n.error(a.HOME_PAGE.ERROR.DESCRIPTION,{title:a.TITLE})})}]),angular.module("appModule").controller("kitchenDesignController",["$scope","kitchenDesignConstants",function(e,t){e.KDStaticData=t,console.log("this is design concept page"),e.requestDesignType="commercialKitchen"}]),angular.module("appModule").controller("landingPageController",["$scope","landingPageService","logService",function(o,n,a){console.log("add update delete content of landing page");var i={};o.uploadLogo=function(){i.logoImagePath="./images/home/website-logo/"+o.logoImage.name;var e=o.logoImage,t=new FormData;t.append("file",e),n.uploadLogo(t).then(function(e){a.success("landingPageService.uploadLogo()",e)},function(e){a.failed("landingPageService.uploadLogo()",e)}),n.removeExistingLogo().then(function(e){a.success("landingPageService.removeExistingLogo()",e)},function(e){a.failed("landingPageService.removeExistingLogo()",e)}),n.emptyLogoDirectory({directoryPath:"/app/public/images/home/website-logo"}),siteNavigation.json.addLogoPathToDb(i).then(function(e){i={},o.responseData=e.data,a.success("landingPageService.addLogoPathToDb()",e)},function(e){a.failed("landingPageService.addLogoPathToDb()",e)})},n.getNavigationList().then(function(e){o.navigationObject=e.data,a.success("landingPageService.getOrUpdateNavigationList()",e)},function(e){a.failed("landingPageService.getOrUpdateNavigationList()",e)})}]),angular.module("appModule").controller("modularKitchenOrdersController",["$scope","viewOrderService",function(t,o){o.getModularKitchenOrdersDetails().then(function(e){console.log(e),t.modularKitchenOrders=e.data},function(e){console.log("error while fetching order details")}),t.deleteOrder=function(e){console.log(e),o.deleteAnOrder(e).then(function(e){console.log("order deleted successfully")},function(e){console.log("error while deleting order")})}}]),angular.module("appModule").controller("placeOrderController",["$scope","placeOrderService","growl","errorConstants","$location",function(t,o,n,a,i){t.getUserDetails=function(){if(10!=t.userdetail.contact.length||t.userdetail.name.length<3)return n.error("The form filled is not valid",{title:a.TITLE}),null;console.log(t.userdetail),o.setUserDetail(t.userdetail),o.saveUserDetails(t.userdetail).then(function(e){console.log(e),setTimeout(function(){o.updateProductAvailability(t.userdetail).then(function(e){t.userdetail=null,console.log(i),i.path("/home/thanks.html")},function(e){n.error(a.USER_DETAIL_SAVED.ERROR.DESCRIPTION,{title:a.TITLE})})},500)},function(e){n.error(a.ORDER_PLACED.ERROR.DESCRIPTION,{title:a.TITLE})})}}]),angular.module("appModule").controller("privacyController",function(){console.log("privacy and faq page")}),angular.module("appModule").controller("productDescriptionController",["$scope","$stateParams","productDescriptionServices","growl","errorConstants",function(t,e,o,n,a){console.log(e.productId),t.productId={},t.productId.id=e.productId,o.getTheProductDecription(t.productId).success(function(e){console.log(e),t.productDescription=e}).error(function(){console.log("there was some error in fetching product details"),n.error(a.PRODUCT_DESC_PAGE.ERROR.DESCRIPTION,{title:a.TITLE})})}]),angular.module("appModule").controller("requestDesignController",["$scope","appConstants","requestDesignService","$location","growl","errorConstants",function(t,o,n,a,i,r){t.submitKitchenDetails=function(e){if(t.requestDesign.username.length<3||10!=t.requestDesign.userContact.length)return i.error("The form filled has some invalid values, please correct them",{title:r.TITLE}),null;if("designEquipment"===t.requestDesignType){if(t.requestDesign.equipmentName.length<3)return i.error("The form filled has some invalid values, please correct them to proceed",{title:r.TITLE}),null;n.requestDesignData(o.REQUEST_EQUIPMENT_DESIGN,e).then(function(e){console.log(e),t.requestDesign=null,setTimeout(function(){a.path("/home/thanks.html"),t.$apply()},1e3)},function(e){i.error(r.REQ_EQUIPMENT_DESIGN.ERROR.DESCRIPTION,{title:r.TITLE})})}else if("planningArea"===t.requestDesignType){if(t.requestDesign.planningAreaName.length<3)return i.error("The form filled has some invalid values, please correct them to proceed",{title:r.TITLE}),null;n.requestDesignData(o.REQUEST_ARCHITECTURAL_DESIGN,e).then(function(e){console.log(e),t.requestDesign=null,setTimeout(function(){a.path("/home/thanks.html"),t.$apply()},1e3)},function(e){i.error(r.ARCH_DESIGN.ERROR.DESCRIPTION,{title:r.TITLE})})}else if("commercialKitchen"===t.requestDesignType){if(t.requestDesign.planningKitchenName.length<3)return i.error("The form filled has some invalid values, please correct them to proceed",{title:r.TITLE}),null;n.requestDesignData(o.REQUEST_KITCHEN_DESIGN,e).then(function(e){console.log(e),t.requestDesign=null,setTimeout(function(){a.path("/home/thanks.html"),t.$apply()},1e3)},function(e){i.error(r.KITCHEN_DESIGN.ERROR.DESCRIPTION,{title:r.TITLE})})}}}]),angular.module("appModule").controller("sellEquipmentController",["$scope","sellEquipmentsService","sellEquipmentConstants","growl","errorConstants","$location",function(t,e,o,n,a,i){console.log("sell equipments"),t.sellEquipmentStaticData=o,t.sellEquipmentData=function(){if(t.sell.username.length<3||t.sell.userCompanyName.length<3||10!=t.sell.userContact.length)return n.error("The Form filled is not valid",{title:a.TITLE}),null;console.log(t.sell),e.saveSellingDetails(t.sell).then(function(e){200===e.status&&(console.log("your equipment details have been submitted successfully"),t.sell=null,i.path("/home/thanks.html"))},function(e){n.error(a.SELL_EQUIPMENT.ERROR.DESCRIPTION,{title:a.TITLE})})}}]),angular.module("appModule").controller("sellingEquipmentController",["$scope","viewOrderService",function(t,o){o.getSellEquipmentOrderDetails().then(function(e){console.log(e),t.sellEquipmentOrders=e.data},function(e){console.log("error while fetching order details")}),t.deleteOrder=function(e){console.log(e),o.deleteAnOrder(e).then(function(e){console.log("order deleted successfully")},function(e){console.log("error while deleting order")})}}]),angular.module("appModule").controller("sendQuotationController",["$scope","sendQuotationService","logService","contactusConstants",function(t,e,o,n){console.log("this is quotation controller"),t.CUStaticData=n,t.quotationData={},t.credentials=[],e.userDetails().then(function(e){t.credentials=e.data,o.success("sendQuotationService.userDetails()",e)},function(e){o.failed("sendQuotationService.userDetails()",e)}),t.sendQuotation=function(){t.quotationData.key=t.credentials[0].key,t.quotationData.username=t.credentials[0].username,console.log(t.quotationData),e.sendQuotation(t.quotationData)}}]),angular.module("appModule").controller("thanksController",["$scope","$location",function(e,t){e.buyEquipmentpage=function(){t.path("/home")}}]),angular.module("appModule").controller("updateProductController",["$scope","updateProductService",function(a,n){console.log("update product controller");var i={};a.getProductToUpdate=function(e){n.getProductToUpdate(e).then(function(e){if(1===e.data.length){for(var t=a.product.id="",o=0;o<e.data[0].construction_details.length;o++)t+="@"+e.data[0].construction_details[o];var n="";for(o=0;o<e.data[0].special_req.length;o++)n+="@"+e.data[0].special_req[o];e.data[0].construction_details=t,e.data[0].special_req=n,a.updatedProduct={productImageURL:e.data[0].productImageURL,name:e.data[0].name,productPrice:e.data[0].productPrice,productID:e.data[0].productID,productCode:e.data[0].productCode,vendorID:e.data[0].vendorID,availabilityType:e.data[0].availabilityType,dimension:e.data[0].dimension,built_material:e.data[0].built_material,application:e.data[0].application,construction_details:e.data[0].construction_details,quantity:e.data[0].quantity,warranty:e.data[0].warranty,rating:e.data[0].rating,deliveryTime:e.data[0].deliveryTime,paymentMode:e.data[0].paymentMode,special_req:e.data[0].special_req},i=JSON.parse(JSON.stringify(a.updatedProduct))}},function(e){console.log("failed response",e)})},a.updateThisProduct=function(e){if(console.log(e),checkIfproductUpdated(e,i))alert("there was no change detected in the updated and previous product");else{var t=e.construction_details.split("@"),o=e.special_req.split("@");e.special_req=o,e.construction_details=t,n.updateProduct(e).then(function(e){200===e.status&&(a.updatedProduct={})},function(e){console.log("failed to update the product",e)})}},checkIfproductUpdated=function(e,t){return e.productImageURL===t.productImageURL&&e.name===t.name&&e.productPrice===t.productPrice&&e.productCode===t.productCode&&e.vendorID===t.vendorID&&e.availabilityType===t.availabilityType&&e.dimension===t.dimension&&e.built_material===t.built_material&&e.application===t.application&&e.construction_details===t.construction_details&&e.quantity===t.quantity&&e.warranty===t.warranty&&e.rating===t.rating&&e.deliveryTime===t.deliveryTime&&e.paymentMode===t.paymentMode&&e.special_req===t.special_req}}]),angular.module("appModule").controller("usageCategoryController",["$scope","$stateParams","usageCategoryService","buyEquipmentConstants","errorConstants","growl",function(t,e,o,n,a,i){t.buyEquipmentStaticData=n,o.getProductList().success(function(e){console.log(e),t.productList=e}).error(function(){i.error(a.ALL_PRODUCT_PAGE.ERROR.DESCRIPTION,{title:a.ALL_PRODUCT_PAGE.ERROR.TITLE})})}]),angular.module("appModule").controller("viewOrdersController",["$scope","viewOrderService",function(t,o){o.getOrderDetails().then(function(e){console.log(e),t.orders=e.data},function(e){console.log("error while fetching order details")}),t.deleteOrder=function(e){console.log(e),o.deleteAnOrder(e).then(function(e){o.getOrderDetails()},function(e){console.log("error while deleting order")})}}]),angular.module("appModule").controller("websiteLayoutController",["$scope","websiteLayoutService","logService","layoutConstants","$rootScope","growl","errorConstants",function(e,t,o,n,a,i,r){e.logoData="",e.staticDataText=n}]),angular.module("appModule").factory("addProductService",["$http","productPathConstants",function(t,o){return{addProduct:function(e){console.log(o.ADD_PRODUCT_TO_DB);try{return t.post(o.ADD_PRODUCT_TO_DB,e)}catch(e){console.log(e)}},uploadProductImage:function(e){return t.post("/app/admin/addProduct/productImage",e,{transformRequest:angular.identity,headers:{"Content-Type":void 0}}).success(function(){console.log("success!!")}).error(function(){console.log("error!!")})}}}]),angular.module("appModule").factory("adminTabService",["$http",function(e){return{get:function(){return e.get("/app/admin")}}}]),angular.module("appModule").factory("homeService",["$http","$q","productPathConstants",function(e,t,o){return{getSliderData:function(){return e.get(o.SLIDER_DATA)}}}]),angular.module("appModule").service("landingPageService",["$http",function(t){return{uploadLogo:function(e){return t.post("/app/admin/landingPage/addLogoImage",e,{transformRequest:angular.identity,headers:{"Content-Type":void 0}}).success(function(){console.log("success!!")}).error(function(){console.log("error!!")})},addLogoPathToDb:function(e){return console.log(e),t.post("/app/admin/addLogo",e)},removeExistingLogo:function(){return t.post("app/admin/deleteLogo")},emptyLogoDirectory:function(e){return t.post("app/admin/deleteLogoDirectory",e)},getNavigationList:function(){return t.get("data/siteNavigation.json").success(function(){console.log("success!!")}).error(function(){console.log("error!!")})}}}]),angular.module("appModule").factory("logService",["$log",function(o){return{success:function(e,t){o.info("SUCCESS! Request:",e,", Response data:",t.data,", status:",t.status,", statusText:",t.statusText)},failed:function(e,t){o.error("FAILED! Request:",e,", Response data:",t.data,", status:",t.status,", statusText:",t.statusText)}}}]),angular.module("appModule").factory("placeOrderService",["$http","productPathConstants",function(t,o){return{setUserDetail:function(e){e.name,e.mail,e.contact},saveUserDetails:function(e){return t.post(o.SAVE_USER_DETAIL,e)},updateProductAvailability:function(e){return console.log(e),t.put(o.UPDATE_PRODUCT_AVAILABILITY,{productID:e.productID})}}}]),angular.module("appModule").factory("productDescriptionServices",["$http","productPathConstants",function(t,o){return{getTheProductDecription:function(e){return t({url:o.SINGLE_PRODUCT,method:"GET",params:e})}}}]),angular.module("appModule").factory("requestDesignService",["$http",function(o){return{requestDesignData:function(e,t){return console.log(e,t),o.post(e,t)}}}]),angular.module("appModule").factory("sellEquipmentsService",["$http","productPathConstants",function(t,o){return{saveSellingDetails:function(e){return t.post(o.SELL_EQUIPMENT,e)}}}]),angular.module("appModule").factory("sendQuotationService",["$http",function(t){return{userDetails:function(){return t.get("/app/sendGridCredentials")},sendQuotation:function(e){return t.post("/app/product/sendQuotationToEmail",e)}}}]),angular.module("appModule").factory("updateProductService",["$http","productPathConstants",function(t,o){return{getProductToUpdate:function(e){return t.post(o.PRODUCT_FOR_UPDATE,{productID:e})},updateProduct:function(e){return t.put(o.UPDATE_PRODUCT,e)}}}]),angular.module("appModule").factory("usageCategoryService",["$http","productPathConstants",function(e,t){return{getProductList:function(){return e.get(t.ALL_PRODUCTS)}}}]),angular.module("appModule").service("viewOrderService",["$http","productPathConstants","growl",function(t,o,e){return{getOrderDetails:function(){try{return t.get(o.ORDER_DETAILS)}catch(e){console.log("could not fetch order details",e)}},getSellEquipmentOrderDetails:function(){try{return t.get(o.SELL_EQUIPMENT_ORDER)}catch(e){console.log("could not fetch order details",e)}},getDesignEquipmentOrderDetails:function(){try{return t.get(o.DESIGN_EQUIPMENT_ORDERS)}catch(e){console.log("could not fetch design equipment requests details",e)}},getArchDesignOrderDetails:function(){try{return t.get(o.ARCHI_MEP_ORDERS)}catch(e){console.log("could not fetch architectural design for layout requests",e)}},getModularKitchenOrdersDetails:function(){try{return t.get(o.MODULAR_KITCHEN_ORDERS)}catch(e){console.log("could not fetch moduklar kitchen order requests",e)}},deleteAnOrder:function(e){try{return t.delete(o.DELETE_ORDER+e._id)}catch(e){console.log("unable to delete this order")}}}}]),angular.module("appModule").service("websiteLayoutService",["$http",function(e){return{}}]),angular.module("appModule").directive("activateOption",[function(){return{restrict:"A",link:function(e,t,o){console.log("element: ",t),t.bind("click",function(e){t.parent().find("li").removeClass("active"),t.parent().siblings().find("li").removeClass("active"),t.addClass("active")})}}}]),angular.module("appModule").directive("fileUpload",["$parse",function(a){return{restrict:"A",link:function(e,t,o){var n=a(o.fileUpload).assign;t.bind("change",function(){e.$apply(function(){n(e,t[0].files[0])})})}}}]),angular.module("appModule").directive("placeOrder",[function(){return{restrict:"E",scope:!0,templateUrl:"views/websiteViews/place-order.html",controller:"placeOrderController",link:function(e,t,o){}}}]),angular.module("appModule").directive("requestDesign",[function(){return{restrict:"E",scope:!0,templateUrl:"views/websiteViews/request-design-dimension.html",controller:"requestDesignController"}}]),angular.module("appModule").constant("aboutusConstants",{pageHeading:"About Us",aboutusBrief:"SDT STEELDESIGN PVT LTD. (Steel Design technology) provides architect plan/layout for commercial kitchen & food service hospitality projects. We Also develop new design of stainless steel/ferrous equipments, We also develop s.s. modular kitchen for food service purpose & for better use and service.",ongoingProject:{headingLabel:"Brief Description ongoing projects and the process we follow :",contentList:["Architect design for Hotel, Restaurant, Commercial Kitchen and food service hospitality projects.","Facility planning (mechanical/electrical/plumbing/hvac/gas/drainage etc.)","Commercial kitchen equipment layout & operational planning for restaurant ,cafeteria ,food court, take away points, bar, dhaba, buffet, hotel kitchen, bakery, laundry, pantry & food van.","Design & development of stainless steel ,ferrous equiment & modular kitchens.","Speciality for restaurant ,bakery, bar, modular kitchen & office layout planning.","Kitchen ,catering & food service (hot & cold) stainless steel equipment technical drawing.","Buy & sell of food service, catering (stailless steel & ferrous) equipment online."]},conpanyStrategy:{headingLabel:"We are engaged in developing the best services using latest designing concepts",contentList:["Vaastu Concept.","Concepts to minimize cost and maximize space utilisation.","Minimize the civil work.","More options available for equipment and layout planning for home and commercial ktchen etc."]},facilities:{headingLabel:"Facility planning for home and food service projects",contentList:["Civil Work.","Electrical Work.","Plumbing Work.","Drainage Work.","Gas.","CCTV.","HVAC."]}}),angular.module("appModule").constant("appConstants",{REQUEST_EQUIPMENT_DESIGN:"/app/designEquipment",REQUEST_ARCHITECTURAL_DESIGN:"/app/designArchitecturalArea",REQUEST_KITCHEN_DESIGN:"/app/designCommercialKitchen"}),angular.module("appModule").constant("architecturalDesignConstants",{pageHeading:"Design your commercial Kitchen/food service projects Architectural layout with equipment planning just @Rs.25/sq.feet",cloudinaryImagePaths:{leftImg:"kitchen-bar-archPlan",rightImg:"canteen-archPlan"},civilDesciption:["Proper Architect designs for Food Service projects.","Use of vastu concept for operational planning of area/floor","Working on architect designs as per standards norms.","Whole area is developed as per customer need to provides a best options","Maximize the space utilization & minimize the development cost","We use the latest concept of designing & development","There is also option of redesigning the layout planning as per customer requirement"],civilWorkingGuideline:["Projects under consideration are - Hotel/Restaurants/Food service center/Office pantry/Bakry/Canteen/Movable Kitchen/Fast food center/Home Kitchen/Dhabas etc.","Specific planning in 2D & 3D view layout of area with equipment planning as desire by client","Elevation & section of all area with description","Various options to be developed for better finalization","Option of civil contracture for developing a project is available"],buttonLabel:"Submit Your Area Dimension",mepSectionHeading:"MEP SERVICES",mepSectionSubheading:"MEP Service layouts planning for residential & commercial activities",constructionSection:{headingLabel:"Construction work in building",textContent:"Every project is unique and therefore its specification too. Here we can see different types of specifications for building construction project that can be used after making modifications suitable to the specified project."},mechanicalSection:{headingLabel:"Mechanical work in building",contentList:["HVAC or air conditioning system and that has piping work for cold and hot water","Fabrication works for ducts, dampers and controllers, thermal / cold insulation works","Erection of machines like chiller unit, air handling units, grills, diffusers etc.","Other Mechanical works are Fire fighting works that included piping, sprinklers and Pumps."]},electricWorkSection:{headingLabel:"Electric work in building",contentList:["Transformer substations, Emergency power, UPS / Central battery, Voice / Data communication","TV, Security systems like CCTV surveillance system, Access control System, Public address system, Building management system (BMS)","Fire alarm system","Lightning protection system.","Electrical service layout with loading capacity with actual routing wire with position of switch & socket with plan & elevation view."]},plumbingSection:{headingLabel:"Plumbing work in building",contentList:["Another important plumbing works are Drinking water, Drainage and Sewerage systems.","Mechanical works are Drinking water, Drainage and Sewerage systems","Plumbing service layout with drainage & inlet –outlet points routing on the floor with position of faucet & drain points"]},otherWorkSection:{headingLabel:"Other work",contentList:["Gas service layout with gas pipe line routing & position of outlet points of gas (basically used in commercial kitchen planning)","HVAC service layout the proper air circulation as per working space with ducting route on the floor which exhaust hot air from kitchen or working area (basically used in commercial space development planning)","S.S. drain trough grating service layout with planning of actual position of drainage point on the floor"]}}),angular.module("appModule").constant("buyEquipmentConstants",{pageHeading:"Products Available",filterSection:"Other usage categories",offerSection:"Active Offers"}),angular.module("appModule").constant("contactusConstants",{pageHeading:"Contact Us",tableData:{headerLabel:"SDT SteelDesign Pvt Ltd.",descriptionText:"Architect designs, creative art & development of stainless steel & ferrous equipment for food service hospitality projects (Online buying & selling equipment)",tableRows:[{tableHeader:"Phone",tableValue:"+91- 9650465689"},{tableHeader:"Mail ID",tableValue:"steeldesigntechnologies@gmail.com"},{tableHeader:"Web address",tableValue:"www.steeldesigntech.com"},{tableHeader:"Office",tableValue:"361, 33 feet road , som bazaar chowk (near Nav Jeevan Adarsh Public School) ,shiv vihar karawal nagar, Delhi - 110094"}]}}),angular.module("appModule").constant("designEquipmentConstants",{designpageHeader:"Design Your Equipment just @Rs.100 with free quote",designEquipmentLeft:{labelName:"For Commercial Kitchen",textContent:"Hotel, Restaurant, Bar, Dhaba, Bakery, Canteen, Cafeteria, Take-away point, Food van"},designEquipmentRight:{labelName:"For Home/ Residential Society/ Commercial Society",textContent:"Offices, Hospitals, Shops, Shopping Malls, Laundry, Industries purpose"},buttonLabel:"Submit Your Equipment Dimension and Details",caseStudyHeader:"Case Study",caseStudyContent:["If you need construction detail of work table with one undershelf.","Then we will provide a line drawing (shop drawing) with all specification, to view the equipment in all view with section, elevation, plan & isometric view related to work table"],angleViewHeader:"The different angle views for the above equipment",specificationContent:{header:"Specifications",specificationList:["16 G.A S.S. Top.","Front, right & left side turned down 50mm & IN 12mm.","Rear side turned up 150mm with 20mm coved radius than sheet returned 25mm with 90 degree & in downwards 12mm","Top should be reinforcement by 16 G.A S.S. channel for sound detained.","Diameter 38mm tubular legs.","18 G.A S.S. undershelf with all sides turned down 50mm & in downwards 12mm.","38mm X 38mm 12 G.A S.S. angle frame work.","150mm high legs with adjustable bullet feet."]}}),angular.module("appModule").constant("errorConstants",{TITLE:"Alert! We got error",SUCCESS_TITLE:"Success!! The request was successful.",HOME_PAGE:{ERROR:{DESCRIPTION:"There was some issue while fetching slider data from database"},SUCCESS:{DESCRIPTION:"Slider data fetched from database successfully"}},ALL_PRODUCT_PAGE:{ERROR:{DESCRIPTION:"There was some issue while fetching products from database"},SUCCESS:{DESCRIPTION:"Products fetched from database successfully"}},PRODUCT_DESC_PAGE:{ERROR:{DESCRIPTION:"There was some problem while fetching product details, Please try again after some time."},SUCCESS:{DESCRIPTION:"Product detail fetched."}},ORDER_PLACED:{ERROR:{DESCRIPTION:"There Was some error while placing your order."},SUCCESS:{DESCRIPTION:"This is to confirm That Your Order has been placed successfully"}},USER_DETAIL_SAVED:{ERROR:{DESCRIPTION:"There Was some error while saving user details"},SUCCESS:{DESCRIPTION:"This is to confirm That User details have been saved successfully"}},SELL_EQUIPMENT:{ERROR:{DESCRIPTION:"There Was some error while saving details for sell-equipment request"},SUCCESS:{DESCRIPTION:"This is to confirm That request have been received successfully"}},REQ_EQUIPMENT_DESIGN:{ERROR:{DESCRIPTION:"There was some error while saving your request for equipment design"},SUCCESS:{DESCRIPTION:"We have saved your request, we will get back to you shortly with an update"}},ARCH_DESIGN:{ERROR:{DESCRIPTION:"There was some error while saving your request for Architectural design"},SUCCESS:{DESCRIPTION:"We have saved your request, we will get back to you shortly with an update"}},KITCHEN_DESIGN:{ERROR:{DESCRIPTION:"There was some error while saving your request for kitchen design"},SUCCESS:{DESCRIPTION:"We have saved your request, we will get back to you shortly with an update"}}}),angular.module("appModule").constant("homeConstants",{websiteMotto:"Online food service and hospitality equipment trading. Development of new ferrous and stainless steel equipment, commercial and residential kitchen layout and facility planning.",companyPromise:[{promiseHeading:"Our Promise",promiseText:"Minimise the cost to give best quality product",imageLink:"company-promises/promise"},{promiseHeading:"100% Assurance",promiseText:"Be 100% assured about the product delivered.",imageLink:"company-promises/promise"},{promiseHeading:"Customer Support",promiseText:"Always ready to support customer with flexibility mode",imageLink:"company-promises/promise"}],testimonyList:[{imageUrl:"images/testimonial/person.jpg",testimonyText:"I have been trading with 'SDT Technology' for past 1 year, it is good to have them online. There are lot of customer like us looking for your services.I have been a satisfied cutomer, keep up the good work.",testimonyUsername:"Ramesh (dhaba owner)"},{imageUrl:"images/testimonial/person.jpg",testimonyText:"Wonderful kitchen layout planning services in decent price. I took their service for my restaurant kitchen planning and within short time they provided a good layout.I would like to thank the team for their quick work and taking special attention for my limited time request.",testimonyUsername:"Manvinder Singh (Customer)"},{imageUrl:"images/testimonial/person.jpg",testimonyText:"I would like to recommend 'sdt tech' services to everyone who have limited space and are thinking of re-planning their layout to maximize the space utilisation for their cafes, dhabas, restaurants.",testimonyUsername:"Kushal Simra"}]}),angular.module("appModule").constant("kitchenDesignConstants",{pageHeading:"Design & Develop Your S.S. Modular kitchen",contentHeading:"For development of",buttonLabel:"Submit Your Kitchen Dimension",workingGuidlines:{headingLabel:"working guidelines",contentList:["Design and development of stainless steel modular kitchen.","Electricity, Drainage, plumbing, gas, HVAC consultancy services available for modular kitchen.","Exhaust system added as per requirement","Built in option for cooking ranges & oven is available","100% food hygienic and rust proof surface with puff insulated surface","Long life durability with 100% resell value and easily portable from one place to another","Built in Refrigeration storage system is available as per utilization"]},cloudinaryImagesPaths:["modularkitchen1","modularkitchen2","modularkitchen3"]}),angular.module("appModule").constant("layoutConstants",{siteHeading:{text:"SteelDesignTechnology",link:"home"},navbarOptionsLeft:[{navtext:"Buy Equipment",navLink:"equipments"},{navtext:"Sell Equipment",navLink:"sellEquipment"},{navtext:"Design Equipment",navLink:"designEquipment"},{navtext:"Design Kitchen/MEP Service",navLink:"architecturalDesign"},{navtext:"Design Modular Kitchen",navLink:"kitchenDesignServices"}],navbarOptionsRight:[{navtext:"About Us",navLink:"aboutus"},{navtext:"Contact Us",navLink:"contactus"}],functionalAreaList:["Architect layout planning for restaurant and food service projects with facility planning.","Design and development of S.S./M.S. equipment/shop drawing as per requirement in hospitality projects/home/industrial purpose.","S.S. modular kitchen design and fabrication.","Online buying and selling of food service/Kitchen equipment."],copyrightText:"SDT SteelDesign Pvt Ltd. All Rights Reserved",privacyLink:{linkText:"Privacy Policy & FAQs",link:"privacyNfaq"}}),angular.module("appModule").constant("productPathConstants",{ALL_PRODUCTS:"/app/allProducts",SINGLE_PRODUCT:"/app/getProductDetails",SAVE_USER_DETAIL:"/app/placeUserOrder",SELL_EQUIPMENT:"/app/sellEquipment",SLIDER_DATA:"/app/getSliderData",ADD_PRODUCT_TO_DB:"/app/admin/addProductToDB",PRODUCT_FOR_UPDATE:"/app/admin/productForUpdate",UPDATE_PRODUCT:"/app/admin/updateProduct",UPDATE_PRODUCT_AVAILABILITY:"/app/updateProductAvailability",ORDER_DETAILS:"/app/admin/viewOrders",SELL_EQUIPMENT_ORDER:"/app/admin/viewSellingEquipmentRequest",DESIGN_EQUIPMENT_ORDERS:"/app/admin/viewDesignEquipmentRequest",ARCHI_MEP_ORDERS:"/app/admin/viewArchPlanningRequest",MODULAR_KITCHEN_ORDERS:"/app/admin/viewModularKitchenRequest",DELETE_ORDER:"/app/admin/deleteAnOrder/:deleteId"}),angular.module("appModule").constant("sellEquipmentConstants",{sellNotification:"Important Information for the companies who wants to sell their equipment on our website -",notificationDesc:"It is a platform to encourage Indian manufacturer for promoting initiative 'Made In India'.",impNote:"Note: This service is free of cost (No hidden charges)",sellEquipmentForm:{mailLabel:"Email address",usernameLabel:"Username",contactLabel:"Contact no",companyNameLabel:"Firm / Company Name",descriptionLabel:"Product brief description",buttonLabel:"Submit Your Details"}});