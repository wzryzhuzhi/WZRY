angular.module("heroStoryModule",[])
   .config(function($stateProvider,$urlRouterProvider){
   	$stateProvider
   	.state('story.heroStory',{
		url:'/heroStory',
		templateUrl:'components/story/heroStory/heroStory.html',
		controller:'heroStorycontrol',
		css:['components/story/story.css','components/story/heroStory/heroStory.css']
   	})	
   })
	.controller('heroStorycontrol',['$scope',function($scope){
//		$scope.herostoryArr=['全部英雄','太古魔道','稷下学院','秦地','楚汉之地','魏地','蜀地','吴地','大唐帝国','扶桑','西域','北夷','勇士之地']
	
	}])