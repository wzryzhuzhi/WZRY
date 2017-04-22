angular.module('collegauesModule',[])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
        .state('strategy.collegaues',{
            url: '/collegaues',
            templateUrl: 'components/strategy/collegaues/collegaues.html',
            controller:'collegauesCtrl',
            css:['components/strategy/strategy.css','components/strategy/collegaues/collegaues.css']
        })
})
.controller('collegauesCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/strategy/json/colJson/col1.json').success(function(res){
		$scope.arrMostNew=res.msg.result;
	});
	$http.get('components/strategy/json/colJson/col2.json').success(function(res){
		$scope.arrMostNew2=res.msg.result;
	});
	$http.get('components/strategy/json/colJson/col3.json').success(function(res){
		$scope.arrMostNew3=res.msg.result;
	});
	$http.get('components/strategy/json/colJson/col4.json').success(function(res){
		$scope.arrMostNew4=res.msg.result;
	});
	$http.get('components/strategy/json/colJson/col5.json').success(function(res){
		$scope.arrMostNew5=res.msg.result;
	});
	$http.get('components/strategy/json/colJson/col6.json').success(function(res){
		$scope.arrMostNew6=res.msg.result;
	});
	$http.get('components/strategy/json/colJson/col6.json').success(function(res){
		$scope.arrMostNew7=res.msg.result;
	});
}])