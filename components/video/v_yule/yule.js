angular.module('v_yuleModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('video.yule',{
            url: '/yule',
            templateUrl: 'components/video/v_yule/yule.html',
            controller:'v_yuleCtrl',
            css:['components/video/video.css','components/video/v_yule/yule.css']
        })
})
.controller('v_yuleCtrl',['$scope',function($scope){
}])
//传值
//懒加载(自定义指令)
