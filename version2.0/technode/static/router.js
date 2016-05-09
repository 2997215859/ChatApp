/*angular.module('routeModule',['ngRoute'])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
	//开启HTML5的模式，高级浏览器会重写url？低级浏览器会自动降级重定向到#开头的？
	$routeProvider
	.when('/',{
		templateUrl:'pages/room.html',
		controller:'RoomCtrl'
	})
	.when('/login',{
		templateUrl:'pages/login.html',
		controller:'LoginCtrl'
	})
	.otherwise({
		redirectTo:'/login'
	});
}]);*/