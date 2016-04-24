var techNodeApp = angular.module("techNodeApp",[]);
angular.module('techNodeApp').factory('socket',function($rootScope){
	// var socket = io.connect('/');
	var socket = io();
	console.log("理论上将，我已经连接上服务器了");
	return {
		on:function(eventName,callback){
			socket.on(eventName,function(){
				var args = arguments;
				$rootScope.$apply(function(){
					callback.apply(socket,args);
				});
			});
		},
		emit:function(eventName,data,callback){
			socket.emit(eventName,data,function(){
				var args = arguments;
				$rootScope.$apply(function(){
					callback.apply(socket,args);
				});
			});
		}
	};
});

angular.module('techNodeApp').directive('ctrlEnterBreakLine', function() {
	return function(scope, element, attrs) {
    	var ctrlDown = false;
    	element.bind("keydown", function(evt) {
      		if (evt.which === 17) {
        		ctrlDown = true;
        		setTimeout(function() {
          			ctrlDown = false
        		}, 1000);
      		}
      		if (evt.which === 13) {
        		if (ctrlDown) {
          			element.val(element.val() + '\n');
        		} else {
          			scope.$apply(function() {
            		scope.$eval(attrs.ctrlEnterBreakLine);
          		});
          		evt.preventDefault();
          		console.log("理论上，应该调用createMessage的函数了");
        	}
      	}
    	});
  	};
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


angular.module('techNodeApp').controller('MessageCreatorCtrl', function($scope, socket) {
	$scope.createMessage = function () {
    	console.log("我即将触发制造消息事件");
    	socket.emit('createMsg', $scope.newMessage);
    	$scope.newMessage = '';
  	};
});


angular.module('techNodeApp').directive('autoScrollToBottom',function(){
	return {
		link:function(scope,element,attrs){
			scope.$watch(function(){
				return element.children().length;
			},function(){
				element.animate({
					scrollTop:element.prop('scrollHeight')
				},1000);
			});
		}
	};
});

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

