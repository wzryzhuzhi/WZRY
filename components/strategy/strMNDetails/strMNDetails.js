angular.module('strMNDetailsModule',[])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
        .state('strategy.strMNDetails',{
            url: '/strMNDetails',
            templateUrl: 'components/strategy/strMNDetails/strMNDetails.html',
            controller:'strMNDetailsCtrl',
            css:['components/strategy/strMNDetails.css','components/strategy/strMNDetails/strMNDetails.css']
        })
})
.controller('strMNDetailsCtrl',['$scope',function($scope){
	
}])