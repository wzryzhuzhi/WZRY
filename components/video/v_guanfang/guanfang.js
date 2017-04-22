angular.module('v_guanfangModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('video.guanfang',{
            url: '/guanfang',
            templateUrl: 'components/video/v_guanfang/guanfang.html',
            controller:'v_guanfangCtrl',
            css:['components/video/video.css','components/video/v_guanfang/guanfang.css']
        })
})
.controller('v_guanfangCtrl',['$scope',function($scope){
	
}])
//传值
//懒加载(自定义指令)
