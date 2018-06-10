(function(){
    var app = angular.module('appModule');
    app.directive('activateOption',[function(){
        return {
            restrict : 'A',
            link : function(scope, element, attr){
                // console.log('scope : ',scope);
                console.log('element: ', element);
                // console.log('attr: ',attr);
                element.bind('click', function(target){
                    element.parent().find('li').removeClass('active');
                    element.parent().siblings().find('li').removeClass('active');
                    element.addClass('active');
                });
            }
        }
    }]);
})();