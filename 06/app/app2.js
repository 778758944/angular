/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-14 11:35:23
 * @version $Id$
 */
var myApp=angular.module("App",[]);
myApp.controller("myForm",function($scope){
	$scope.inputs=[
		{placeholder:"name",required:true},
		{placeholder:"email",required:true}
	];
});
myApp.controller("CityController",function($scope){
	$scope.cities=[
		{name: 'Seattle'},
		{name: 'San Francisco'},
		{name: 'Chicago'},
		{name: 'New York'},
		{name: 'Boston'}
	];
})
