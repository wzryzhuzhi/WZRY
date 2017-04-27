angular.module('strmnpageModule',[])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
        .state('strategy.mostNew.mnPage',{
            url: '/mnPage',
            templateUrl: 'components/strategy/mostNew/mnPage/mnPage.html',
            controller:'mnPageCtrl',
            css:['components/strategy/strategy.css','components/strategy/mostNew/mostNew.css','components/strategy/mostNew/mnPage/mnPage.css']
        })
})
.controller('mnPageCtrl',['$scope','$http',function($scope,$http){
	//console.log("gggg");
	$http.get('components/strategy/mostNew/mnPage/mnPageJson/mnPage1.json').success(function(res){
		//console.log(res);
		$scope.arrDetails=res.msg.result;
		//console.log(res.msg.result);
	});
	$http.get('components/strategy/mostNew/mnPage/mnPageJson/mnPage2.json').success(function(res){
		$scope.arrDetails2=res.msg.result;
	});
	
	$scope.isShow=false;
	$scope.mnPageChangeShow=function(){
		$scope.isShow=!$scope.isShow;
	};
}])