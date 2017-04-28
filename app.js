angular.module("wzry",['ngWaterfall','ui.router','angularCSS','homeModule','matchModule','videoModule','strategyModule',

'mostNewModule','herosModule','newHandModule','officialModule','collegauesModule','strmnpageModule','mnPageDetailsModule',

'v_saishiModule','yingxiongModule','vjieshuoModule','v_yuleModule','v_guanfangModule','storyModule','storyHomeModule','originModule','worldMapModule','heroStoryModule',
//'linkModule',
'newhandModule','mesModule'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
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
			$scope.arrHeros=res.data;
			$scope.herosort=function(evenHeros){
				$scope.evensort=evenHeros;
			}
		})
	}])
	
/*2.首页-更新服*/
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
			/*默认加载项*/
			$http.get("components/community/con_json/con1.json").success(function(res){
					$scope.arrConText=res.rsp_obj.QueryTopic_1.data.pageContent;
			})
			$scope.menuname=$scope.arrMenulist[0].forum_title
			$scope.menuShow=false;
			
			$scope.addmenu=function(menuname,i){
				$scope.menuname=menuname
				$scope.menuShow=false;
				$http.get("components/community/con_json/con"+(i+1)+".json").success(function(res){
					$scope.arrConText=res.rsp_obj.QueryTopic_1.data.pageContent;
//					console.log($('#con_ul>li').last().offset().top)
				})
			}
			
			$scope.menushow=function(){
				$scope.menuShow=!$scope.menuShow;
			}	
			
		})
		
//		$scope.page=1 ,loading=true;
//		$scope.arrConP = [];
//		function pushContent() {                    //核心是这个函数，向$scope.posts

                                                //添加内容
//      if (loading) {                         //如果页面没有正在读取
//          loading = false;                     //告知正在读取
//          $http.get("components/community/con_json/con1.json") //调用API，读取第几页的内容
//              .success(function (data) {
//                  $scope.arrConold=data.rsp_obj.QueryForum_1.data.child_forums
//                  for (var i = 0; i <= $scope.arrConold.length - 1; i++) {
//                      $scope.arrConP.push($scope.arrConold[i]);
//                  }
////                  $timeout(function () {
////                     var  main=document.querySelector('.main');
////                      var today=Echo(main,document);//调用函数返回的对象
////                     today.init({offset: 200, throttle: 10});
////                  },10);
//                  loading = true;            //告知读取结束
//             });
//	            page++;                             //翻页
//	            if(page>4){
//	                page=1;
//	            }
//      	}
//      }
//		
//		  /*滚动事件监听*/
//		$('#con_ul').on('scroll', function (event) {   //jquery，事件滚动监听
//	        // if ($(document).scrollTop() + $(window).height() >= $(document).height()) {
//	        if($('#con_ul>li').last().offset().top<$(document).height()){
//	            //当滚动到页面底部
//	            pushContent();                      //调用向$scope.posts添加内容函数
//	        }
//	    });	
	}])
	
	
	
/*4.首页-论坛*/

	
/*5，首页-活动*/	
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
		console.log('hd');
	}])