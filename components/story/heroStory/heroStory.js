angular.module("heroStoryModule",[])
   .config(function($stateProvider,$urlRouterProvider){
   	$stateProvider
   	.state('heroStory',{
		url:'/heroStory',
		templateUrl:'components/story/heroStory/heroStory.html',
		controller:'heroStorycontrol',
		css:'components/story/heroStory/heroStory.css'
   	})	
   })
	.controller('heroStorycontrol',['$scope','$http',function($scope,$http){
		
		}])