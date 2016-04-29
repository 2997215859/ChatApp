angular.module('techNodeApp',['ngRoute']);
angular.module('techNodeApp',['ngRoute'])
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
});
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



