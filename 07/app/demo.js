/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-15 08:43:54
 * @version $Id$
 */
var myApp=angular.module("App",[]);
myApp.controller("SomeController",function($scope){});
myApp.controller("SecondController",function($scope){});
myApp.directive("myDirective",function(){
	return{
		restrict:"A",
		scope:true//当scope为true时，指令作用域继承外部作用域
	};
});
myApp.directive("myDirective2",function(){
	return {
		restrict:"A",
		scope:{},
		priority:1000,
		template:"<div>inside myDirective2 {{myProperty2}}</div>"
	};
});
myApp.controller("MainController",function($scope){});
myApp.directive("myDirective3",function(){
	return {
		restrict:"A",
		template:"inside myDirective3, isolate{{myProperty3}}",
		scope:{}
	};
});
myApp.directive("myInhertScopeDirective",function(){
	return {
		restrict:"A",
		template:"Inside myDirective,isolate scope:{{myProperty3}}",
		scope:true
	}
})
