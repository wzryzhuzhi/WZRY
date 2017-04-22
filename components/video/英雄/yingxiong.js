angular.module('yingxiongModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('video.yingxiong',{
            url: '/yingxiong',
            templateUrl: 'components/video/英雄/yingxiong.html',
            controller:'yingxiongCtrl',
            css:['components/video/video.css','components/video/英雄/yingxiong.css']
        })
})
.controller('yingxiongCtrl',['$scope',function($scope){
	
}])