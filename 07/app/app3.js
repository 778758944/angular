/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-15 11:08:43
 * @version $Id$
 */
var myApp=angular.module("App",[]);
myApp.directive("hello",function(){
	return {
		restrict:"E",
		template:"<span>hi there</span>",
		replace:true
	};
});
myApp.controller("MyController",function($scope){
	$scope.things=[1,2,3,4,5,6];
});
