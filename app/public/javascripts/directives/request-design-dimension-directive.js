(function(){
    var appModule = angular.module('appModule');
    appModule.directive('requestDesign',[function(){
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'views/websiteViews/request-design-dimension.html',
            controller: 'requestDesignController'
        };
    }]);
})();