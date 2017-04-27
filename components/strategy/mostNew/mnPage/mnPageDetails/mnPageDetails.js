angular.module('mnPageDetailsModule',[])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
        .state('strategy.mostNew.mnPage.mnPageDetails',{
            url: '/mnPage',
            templateUrl: 'components/strategy/mostNew/mnPage/mnPageDetails/mnPageDetails.html',
            controller:'mnPageDetailsCtrl',
            css:['components/strategy/strategy.css','components/strategy/mostNew/mostNew.css','components/strategy/mostNew/mnPage/mnPage.css','components/strategy/mostNew/mnPage/mnPageDetails/mnPageDetails.css']
        })
})
.controller('mnPageDetailsCtrl',['$scope',function($scope){
	console.log("mnPageDetailsCtrl");
	
	
}])