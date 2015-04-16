/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-16 11:22:27
 * @version $Id$
 */
var myApp=angular.module("App",["ngRoute"]);
myApp.config(["$routeProvider",function($routeProvider){
	$routeProvider
		.when("/home",{
			templateUrl:"view/home.html",
			controller:"HomeController"
		})
		.when("/inbox/:name",{
			templateUrl:"view/index.html",
			controller:"IndexController"
		})
		.otherwise({redirectTo:"/"});
}]);
myApp.controller("HomeController",function($scope){});
myApp.controller("IndexController",function($scope){});
