angular.module('drinkModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home.drink',{
            url: '/drink',
            templateUrl: 'components/home/drink/drink.html',
            controller:'drinkCtrl',
            css:['components/home/home.css','components/home/drink/drink.css']
        })
})
.controller('drinkCtrl',['$scope',function($scope){
	
}])
//传值
//懒加载(自定义指令)
