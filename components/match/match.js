angular.module('matchModule',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('match',{
			url:'/match',
			templateUrl:'components/match/match.html',
			controller:'MainCtrl',
			css:'components/match/match.css'
		})
})
//	.controller('matchcontrol',['$scope','$http',function($scope,$http){
//		$http.get('components/match/match.json').success(function(res){
//			$scope.arrMatchgames=res.msg.reclist_231;
//		})
//	}])
	.factory("myService",function($http){
        return {
            getImages : function(cb){
                $http({ method : "GET", url: 'components/match/match.json'}).
                    success(function(data, status) {
                        cb(data,status);
                        console.log(1111111)
                    }).
                    error(function(data, status) {
                    });
            }
        }
    })
  .controller('MainCtrl', function ($scope,$rootScope,$state,$location,$timeout,myService) {
        var page = 1;
        var pageSize = 8;


        myService.getImages(function(data){
        	console.log(data.msg.reclist_231)
            $scope.matchs = [];
            $scope.results = data.msg.reclist_231.slice(0,page*pageSize);
            for (var i = 0; i < $scope.results.length; i++) {
                $scope.matchs.push($scope.results[i]);
            }
        })
        $scope.text = "上拉加载更多"
        $scope.loadMore = true;
        $scope.loadMoreData = function(){
            $scope.text = "加载中，请稍后···";
            $timeout(function(){
                page++;
                myService.getImages(function(data){
                    $scope.matchs = [];
                    $scope.results = data.msg.reclist_231.slice(0,page*pageSize);
                    if ($scope.results.length ==30) {
                        $scope.text = "内容已经全部加载完毕"
                    }
                    for (var i = 0; i < $scope.results.length; i++) {
                        $scope.matchs.push($scope.results[i]);
                    }
                })
                $scope.text = "点我加载更多···"
            },150);
        };
          $scope.$on("waterfall:loadMore",function(){//滚动自动填充事件
              $scope.loadMoreData();
          })
  })