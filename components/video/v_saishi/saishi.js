angular.module('v_saishiModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('video.saishi',{
            url: '/saishi',
            templateUrl: 'components/video/v_saishi/saishi.html',
            controller:'v_saishiCtrl',
            css:['components/video/video.css','components/video/v_saishi/saishi.css']
        })
})
.controller('v_saishiCtrl',['$scope',function($scope){
	
}])
//传值
//懒加载(自定义指令)
