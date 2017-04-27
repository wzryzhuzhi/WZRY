angular.module('strategyModule',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('strategy',{
			url:'/strategy',
			templateUrl:'components/strategy/strategy.html',
			controller:'strategycontrol',
			css:'components/strategy/strategy.css'
		})
})
.service('swiper3',['$timeout',function($timeout){
	$timeout(function(){
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay:1500,
		    pagination: '.swiper-pagination',  
		 }) 
	},50);
}])
.controller('strategycontrol',['$scope','$http','swiper3',function($scope,$http){
	$http.get("components/strategy/json/ban.json").success(function(res){
		//console.log(res);
		$scope.arrBan=res.msg.result;
		//console.log(res.msg.result);
	});
	
	$scope.isActive1=true;
	$scope.isActive2=false;
	$scope.isActive3=false;
	$scope.isActive4=false;
	$scope.isActive5=false;
	$scope.strChangeBg=function(str){
		$scope.isActive1=false;
		$scope.isActive2=false;
		$scope.isActive3=false;
		$scope.isActive4=false;
		$scope.isActive5=false;
		$scope[str] = true;
	};
}])
