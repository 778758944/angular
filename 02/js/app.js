/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-12 15:25:21
 * @version $Id$
 */
var MyApp=angular.module("App",[]);
MyApp.controller("FirstController",function($scope){
	$scope.count=0;
	$scope.add=function(){
		$scope.count++;
	};
	$scope.subtract=function(){
		$scope.count--;
	};
});
MyApp.controller("ParentController",function($scope){
	$scope.person={
		greeted:false
	};
});
MyApp.controller("ChildController",function($scope){
	$scope.sayHello=function(){
		$scope.person.name="Ali lerner";
	};
});
