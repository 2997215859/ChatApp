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
