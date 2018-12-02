(function () {
    var appModule = angular.module('appModule');
    appModule.directive('filterSelection', [function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                 console.log(element);
                 element.bind('click', function(target){
                    element.parent().find('li').removeClass('active');
                    element.parent().siblings().find('li').removeClass('active');
                    element.addClass('active');
                });
            }
        }
    }]);
})();