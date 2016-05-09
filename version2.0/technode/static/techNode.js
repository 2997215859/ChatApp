var techNodeApp = angular.module('techNodeApp',['ngRoute']);
techNodeApp
.run(function($window,$rootScope,$http,$location){
	$http({
		url:'/api/validate',
		method:'GET'
	}).success(function(user){
		$rootScope.me = user;
		$location.path('/');
	}).error(function(data){
		$location.path('login');
	});
})
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
	//开启HTML5的模式，高级浏览器会重写url？低级浏览器会自动降级重定向到#开头的？
	$routeProvider
	.when('/',{
		templateUrl:'pages/room.html',
		controller:'RoomCtrl'
	})
	.when('/login',{
		// templateUrl:'ChatApp/version2.0/technode/static/pages/login.html',
		templateUrl:'pages/login.html',
		// template:'<h1>hello</h1>',
		controller:'LoginCtrl'
	})
	.otherwise({
		redirectTo:'/login'
	});
}]);
/*techNodeApp.controller('MessageCreatorCtrl',function($scope,socket){
	$scope.newMessage = '';
	$scope.createMessage = function(){
		if($scope.newMessage === ''){
			console.log("未填入发送的消息");
		}
		console.log("我即将出发ctreatMessage事件");
		socket.emit('createMessage',$scope.newMessage);
	};
	$scope.newMessage = '';
});*/



