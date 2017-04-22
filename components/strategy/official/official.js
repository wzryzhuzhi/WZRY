angular.module('officialModule',[])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
        .state('strategy.official',{
            url: '/official',
            templateUrl: 'components/strategy/official/official.html',
            controller:'officialCtrl',
            css:['components/strategy/strategy.css','components/strategy/official/official.css']
        })
})
.controller('officialCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/strategy/json/offJson/off1.json').success(function(res){
		$scope.arrMostNew=res.msg.result;
	});
	$http.get('components/strategy/json/offJson/off2.json').success(function(res){
		$scope.arrMostNew2=res.msg.result;
	});
	$http.get('components/strategy/json/offJson/off3.json').success(function(res){
		$scope.arrMostNew3=res.msg.result;
	});
	$http.get('components/strategy/json/offJson/off4.json').success(function(res){
		$scope.arrMostNew4=res.msg.result;
	});
	$http.get('components/strategy/json/offJson/off5.json').success(function(res){
		$scope.arrMostNew4=res.msg.result;
	});
}])