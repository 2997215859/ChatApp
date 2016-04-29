//利用express.js搭建一个Node.js服务器
//在technode目录下新建app.js文件，添加如下代码
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname,'/static')));//指定静态文件的访问目录
app.use(function(req,res){
	res.sendFile(path.join(__dirname,'static/index.html'));
});
var server = app.listen(port,function(){
	console.log("TechNode is on port "+port+"!");
});
var io = require('socket.io').listen(server);//加载socket模块，监听服务器，这个服务器已经监听port
var messages = [];
io.sockets.on('connection',function(socket){
	console.log("作为服务器，我被链接上了");
	socket.on('getAllMessages', function() {
		console.log("我被要求触发allMessage事件");
		socket.emit('allMessage',messages);
	});
	socket.on('createMsg',function(message) {
		messages.push(message);
		console.log("我即将出发添加消息");
		socket.emit('messageAdded',message);
	});
});
