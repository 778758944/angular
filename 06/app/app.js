/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-14 10:33:31
 * @version $Id$
 */
var myApp=angular.module("App",[]);
myApp.run(function($rootScope,$timeout){
	$rootScope.Disable=true;
	$timeout(function(){
		$rootScope.Disable=false;
		$rootScope.myUrl="http://www.baidu.com";
		$rootScope.myPicture="img/mx3.png";
	},5000);
});
myApp.controller("MyController1",function($scope){
	$scope.somebrave={
		some:"java"
	};
	$scope.doAction=function(){
		$scope.somebrave.some="kaka";
	};
});
myApp.controller("MyController2",function($scope){
	$scope.doAction2=function(){
		$scope.somebrave.some="heihei";//引用
	};
});
