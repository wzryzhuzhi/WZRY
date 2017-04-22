angular.module('mostNewModule',[])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
        .state('strategy.mostNew',{
            url: '/mostNew',
            templateUrl: 'components/strategy/mostNew/mostNew.html',
            controller:'mostNewCtrl',
            css:['components/strategy/strategy.css','components/strategy/mostNew/mostNew.css']
        })
})
.controller('mostNewCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/strategy/json/1.json').success(function(res){
		$scope.arrMostNew=res.msg.result;
	});
	$http.get('components/strategy/json/2.json').success(function(res){
		$scope.arrMostNew2=res.msg.result;
	});
	$http.get('components/strategy/json/3.json').success(function(res){
		$scope.arrMostNew3=res.msg.result;
	});
	$http.get('components/strategy/json/4.json').success(function(res){
		$scope.arrMostNew4=res.msg.result;
	});
	$http.get('components/strategy/json/5.json').success(function(res){
		$scope.arrMostNew4=res.msg.result;
	});
}])