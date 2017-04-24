angular.module('videoModule',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('video',{
			url:'/video',
			templateUrl:'components/video/video.html',
			controller:'videoControl',
			css:'components/video/video.css'
		});
})

.service('swiper',['$timeout',function($timeout){
	$timeout(function(){
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay:1000,
		    pagination: '.swiper-pagination',  
		 }) 
	},50);
}])
.controller('videoControl',['$scope','$http','swiper',function($scope,$http){
		$http.get('components/video/json/轮播.json').success(function(res){
			$scope.arr=res.msg.reclist_236;	
		});
		$http.get('components/video/json/赛事.json').success(function(res){
			$scope.arr1=res.msg.result;	
		});
		$http.get('components/video/json/官方.json').success(function(res){
			$scope.arr2=res.msg.result;	
		});
		$http.get('components/video/json/yule.json').success(function(res){
			$scope.arr3=res.msg.result;	
		});
		$http.get('components/video/json/英雄.json').success(function(res){
			$scope.arr4=res.msg.result;	
		});
		$http.get('components/video/json/解说.json').success(function(res){
			$scope.arr5=res.msg.result;	
		});
	
//		$scope.fun=function(){
//			console.log(1243)
//		}
}]);
    

