angular.module('mesModule',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('message',{
			url:'/message',
			templateUrl:'components/message/message.html',
			controller:'mes_Ctrl',
			css:'components/message/message.css'
		})
})

.controller("mes_Ctrl",['$scope','$http',function($scope,$http){

	$scope.changemsg=function(msgnum){
		$http.get('components/message/json/mnPage'+(msgnum+1)+'.json').success(function(res){
			$scope.arrMes=res.msg.result;
		})
		
		/*-----------------*/
                                                    //读取的页数
		var page = 2 , loading = true;                      //判断是否正在读取内容的变量
		
		$scope.arrMes = [];
		
		$scope.pushContent=function(msgnum) {                    //核心是这个函数，向$scope.posts

                                                //添加内容
        	if (loading) {                         //如果页面没有正在读取
           		loading = false;                     //告知正在读取
            	$http.get("components/message/json/mnPage"+(msgnum+1)+".json") //调用API，读取第几页的内
                	.success(function (res) {
                    	$scope.home_bannerimgarr=res.msg.result;
                    	for(var i = 0; i <= $scope.home_bannerimgarr.length - 1; i++) {
                        	$scope.arrMes.push($scope.home_bannerimgarr[i]);
                    	}
                    	loading = true;            //告知读取结束
                	});
            	page++;                             //翻页
	            if(page>4){
	                page=2;
	            }
        	}
    	}
	  	/*滚动事件监听*/
		var xxx=document.getElementById("mes_auto");
		xxx.onscroll = function () {
        	var scrollTop = xxx.scrollTop,
            	viewHeight = xxx.clientHeight,
            	height = content.offsetHeight;
//          console.log(scrollTop,viewHeight,height)
             //判断是否滚动到底部
	        if ((scrollTop + viewHeight) >= height){
	        	 $scope.pushContent(msgnum);   
	        }
  		}
	}
	$scope.changemsg(1);
	
	
}])
