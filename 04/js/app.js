/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-13 08:30:59
 * @version $Id$
 */
var myApp=angular.module("App",[]);
myApp.controller("MyController",function($scope){
	$scope.num=123;
	$scope.today=new Date();
	$scope.arr=["Ari","jack","kaka","Lucy"];
	$scope.person=[
		{"name":"Air","city":"san francisco","favoritefood":"pizza"},
		{"name":"Jack","city":"shanghai","favoritefood":"rice"},
		{"name":"Lucy","city":"beijing","favoritefood":"pizza"}
	];
	$scope.isCapitalized=function(str){
		return str.charAt(0)===str.charAt(0).toUpperCase();
	};
	$scope.pp=[
		{"name":"Jack","age":12},
		{"name":"Lucy","age":13},
		{"name":"Air","age":14}
	];
});
myApp.filter("capitalize",function(){//自定义过滤器
	return function(input){
		return input[0].toUpperCase()+input.slice(1);
	};
});
