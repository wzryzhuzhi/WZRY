angular.module('guidesModule',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('newhand.guidesForNew',{
			url:'/guidesForNew',
			templateUrl:'components/newhand/guidesForNew/guidesForNew.html',
			controller:'guidesForNewcontrol',
			css:['components/newhand/guidesForNew/guidesForNew.css','components/newhand/newhand.css']
		})
})
.controller("guidesForNewcontrol",['$scope',function($scope){
	
}])