angular.module('techNodeApp').controller('RoomCtrl',function($scope,socket){
	$scope.messages = [];
	
	socket.on('allMessage',function(messages){
		$scope.messages = messages;
		console.log("我已经获得所有offer");
	});
	socket.on('messageAdded',function(message){
		$scope.messages.push(message);
	});
	console.log("理论上来将，我应该会触发getAllMessages来得到所有消息");
	socket.emit('getAllMessages');
});