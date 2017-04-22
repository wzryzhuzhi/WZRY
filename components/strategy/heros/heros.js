angular.module('herosModule',[])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
        .state('strategy.heros',{
            url: '/heros',
            templateUrl: 'components/strategy/heros/heros.html',
            controller:'herosCtrl',
            css:['components/strategy/strategy.css','components/strategy/heros/heros.css']
        })
})
.controller('herosCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/strategy/json/heros1.json').success(function(res){
		$scope.arrMostNew=res.msg.result;
	});
	$http.get('components/strategy/json/heros2.json').success(function(res){
		$scope.arrMostNew2=res.msg.result;
	});
	$http.get('components/strategy/json/heros3.json').success(function(res){
		$scope.arrMostNew3=res.msg.result;
	});
	$http.get('components/strategy/json/heros4.json').success(function(res){
		$scope.arrMostNew4=res.msg.result;
	});
	$http.get('components/strategy/json/heros5.json').success(function(res){
		$scope.arrMostNew4=res.msg.result;
	});
}])