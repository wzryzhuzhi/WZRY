angular.module('newhandModule',['joinTheKingModule','guidesModule','recForNewModule'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('newhand',{
			url:'/newhand',
			templateUrl:'components/newhand/newhand.html',
			controller:'newhandcontrol',
			css:'components/newhand/newhand.css'
		})
})
.controller("newhandcontrol",['$scope',function($scope){
	
}])
