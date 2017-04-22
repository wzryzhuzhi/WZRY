angular.module('vjieshuoModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('video.jieshuo',{
            url: '/jieshuo',
            templateUrl: 'components/video/v_jieshuo/jieshuo.html',
            controller:'v_jieshuoCtrl',
            css:['components/video/video.css','components/video/v_jieshuo/jieshuo.css']
        })
})
.controller('v_jieshuoCtrl',['$scope',function($scope){
	
}])
//传值
//懒加载(自定义指令)
