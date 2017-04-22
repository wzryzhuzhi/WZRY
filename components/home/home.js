angular.module('homeModule',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'components/home/home.html',
			controller:'homecontrol',
			css:'components/home/home.css'
		})
})

/*轮播事件*/
.service('swiper',['$timeout',function($timeout){
	$timeout(function(){
		new Swiper ('.swiper-container', {
		    loop: true,
		    autoplay:2600,
		    autoplayDisableOnInteraction : false,
		    // 如果需要分页器
//		    pagination: '.swiper-pagination',
		    observer:true,
			observeParents:true
		  }) 
	},10);
}])
.controller('homecontrol',['$scope','$http','swiper',function($scope,$http){
	/*轮播部分*/
	$http.get('components/home/home_json/homeban.json').success(function(res){
		$scope.homeSwiper=res.banner
		$scope.arrSmall=res.small
	})
	/*视频部分*/
	$http.get('components/home/home_json/home.json').success(function(res){
		$scope.arrHomeVideos=res.msg.reclist_230;
		$scope.arrHomePlans=res.msg.reclist_412
	})
}])
