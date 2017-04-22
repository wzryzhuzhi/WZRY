angular.module('saishiModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home.saishi',{
            url: '/saishi',
            templateUrl: 'components/video/赛事/saishi.html',
            controller:'saishiCtrl',
            css:['components/video/video.css','components/video/赛事/saishi.css']
        })
})
.controller('saishiCtrl',['$scope',function($scope){
	
}])
//传值
//懒加载(自定义指令)
