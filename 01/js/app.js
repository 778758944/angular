/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-12 14:47:57
 * @version $Id$
 */
var time=angular.module("App",[]).run(function($rootScope){
	$rootScope.name="Jack";
});
time.controller("MyController",function($scope){
	$scope.clock={
		now:new Date()
	};
	function update(){
		$scope.clock.now=new Date();
	};
	setInterval(function(){
		update();
	},1000)
});
