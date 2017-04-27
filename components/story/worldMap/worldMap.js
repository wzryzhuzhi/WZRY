angular.module("worldMapModule",[])
   .config(function($stateProvider,$urlRouterProvider){
   	$stateProvider
   	.state('worldMap',{
		url:'/worldMap',
		templateUrl:'components/story/worldMap/worldMap.html',
		controller:'worldMapcontrol',
		css:['components/story/story.css','components/story/worldMap/worldMap.css']
   	})	
   })
	.controller('worldMapcontrol',['$scope','$http',function($scope,$http){
		
		}])