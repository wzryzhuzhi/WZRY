angular.module("originModule",[])
   .config(function($stateProvider,$urlRouterProvider){
   	$stateProvider
   	.state('origin',{
		url:'/origin',
		templateUrl:'components/story/origin/origin.html',
		controller:'origincontrol',
		css:['components/story/story.css','components/story/origin/origin.css']
   	})	
   })
	.controller('origincontrol',['$scope','$http',function($scope,$http){
		
		}])