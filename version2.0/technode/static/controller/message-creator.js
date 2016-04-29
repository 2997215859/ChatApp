angular.module('techNodeApp').controller('MessageCreatorCtrl', function($scope, socket) {
	$scope.createMessage = function () {
    	console.log("我即将触发制造消息事件");
    	socket.emit('createMsg', $scope.newMessage);
    	$scope.newMessage = '';
  	};
});