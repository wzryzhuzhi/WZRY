angular.module("wzry",['ngWaterfall','ui.router','angularCSS','homeModule','matchModule','videoModule','strategyModule',
/*攻略*/
'mostNewModule','herosModule','newHandModule','officialModule','collegauesModule',
/*赛事*/
'v_saishiModule','yingxiongModule','vjieshuoModule','v_yuleModule','v_guanfangModule'
/*故事站*/
//,'storyModule'

])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
})

/*1.首页-英雄列表*/
	.config(function($stateProvider,$urlRouterProvider){
		$stateProvider
			.state('heros',{
				url:'/heros',
				templateUrl:'components/heros/heros.html',
				controller:'heroscontrol',
				css:'components/heros/heros.css'
			})
	})
	.controller('heroscontrol',['$scope','$http',function($scope,$http){
		$http.get("components/heros/heroList.json").success(function(res){
			$scope.arrHeros=res.data
			$scope.he_isActive0=false;
			$scope.he_isActive=true;
			$scope.herosort=function(evenHeros){
				$scope.evensort=evenHeros;
				$scope.he_isActive0=!$scope.he_isActive0
				$scope.he_isActive=!$scope.he_isActive
			}
		})
	}])
	
/*2.首页-论坛*/
	.config(function($stateProvider,$urlRouterProvider){
		$stateProvider
			.state('exper',{
				url:'/exper',
				templateUrl:'components/exper/exper.html',
				controller:'expercontrol',
				css:'components/exper/exper.css'
			})
	})
	.controller('expercontrol',['$scope','$http',function($scope,$http){
		alert('Android系统暂不支持');
	}])

/*3.首页-论坛*/
	.config(function($stateProvider,$urlRouterProvider){
		$stateProvider
			.state('community',{
				url:'/community',
				templateUrl:'components/community/community.html',
				controller:'communitycontrol',
				css:'components/community/community.css'
			})
	})
	.controller('communitycontrol',['$scope','$http',function($scope,$http){
		$http.get("components/community/con_json/con_menu.json").success(function(res){
			$scope.arrMenulist=res.rsp_obj.QueryForum_1.data.child_forums
			$scope.menuname=$scope.arrMenulist[0].forum_title
			$scope.menuShow=false;
			$scope.addmenu=function(menuname){
				$scope.menuname=menuname
				$scope.menuShow=false;
			}
			$scope.menushow=function(){
				$scope.menuShow=!$scope.menuShow;
			}
		})
	}])
	
/*4.首页-论坛*/
	.config(function($stateProvider,$urlRouterProvider){
		$stateProvider
			.state('story',{
				url:'/story',
				templateUrl:'components/story/story.html',
				controller:'storycontrol',
				css:'components/story/story.css'
			})
	})
	.controller('storycontrol',['$scope','$http',function($scope,$http){
		$http.get('components/story/json/home.json').success(function(res){
			$scope.arr=res;
		})
		$scope.fun=function(){
			
		}
	}])