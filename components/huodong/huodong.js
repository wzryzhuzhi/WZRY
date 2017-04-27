angular.module('huodongModule',[])
.config(function($stateProvider,$urlRouterProvider){
		$stateProvider
			.state('huodong',{
				url:'/huodong',
				templateUrl:'components/huodong/huodong.html',
				controller:'huodongcontrol',
				css:'components/huodong/huodong.css'
			})
	})
	.controller('huodongcontrol',['$scope','$http',function($scope,$http){
		
		
	}])