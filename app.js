angular.module("wzry",['ui.router','angularCSS','homeModule','matchModule','videoModule','strategyModule','mostNewModule','herosModule','newHandModule','officialModule','collegauesModule'])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
})