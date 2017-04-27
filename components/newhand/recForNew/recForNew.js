angular.module('recForNewModule',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('newhand.recForNew',{
			url:'/recForNew',
			templateUrl:'components/newhand/recForNew/recForNew.html',
			controller:'recForNewcontrol',
			css:['components/newhand/recForNew/recForNew.css','components/newhand/newhand.css']
		})
})
.controller("recForNewcontrol",['$scope',function($scope){
	
}])