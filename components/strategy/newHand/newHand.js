angular.module('newHandModule',[])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
        .state('strategy.newHand',{
            url: '/newHand',
            templateUrl: 'components/strategy/newHand/newHand.html',
            controller:'newHandCtrl',
            css:['components/strategy/strategy.css','components/strategy/newHand/newHand.css']
        })
})
.controller('newHandCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/strategy/json/new1.json').success(function(res){
		$scope.arrMostNew=res.msg.result;
	});
	$http.get('components/strategy/json/new2.json').success(function(res){
		$scope.arrMostNew2=res.msg.result;
	});
	$http.get('components/strategy/json/new3.json').success(function(res){
		$scope.arrMostNew3=res.msg.result;
	});
	$http.get('components/strategy/json/new4.json').success(function(res){
		$scope.arrMostNew4=res.msg.result;
	});
	$http.get('components/strategy/json/new5.json').success(function(res){
		$scope.arrMostNew4=res.msg.result;
	});
}])