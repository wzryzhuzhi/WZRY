angular.module('yingxiongModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('video.yingxiong',{
            url: '/yingxiong',
            templateUrl: 'components/video/yingxiong/yingxiong.html',
            controller:'v_yingxiongCtrl',
            css:['components/video/video.css','components/video/yingxiong/yingxiong.css']
        })
})
.controller('v_yingxiongCtrl',['$scope',function($scope){
		
}])