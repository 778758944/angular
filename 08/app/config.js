/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-16 10:57:05
 * @version $Id$
 */
angular.module("App",[])
.factory("myFactory",function(){
	var service={};
	return service;
})
.directive("myDirective",function(){
	return {
		template:"<div><a href='http://www.baidu.com'>baidu</a></div>"
	};
});

angular.module('App2',[])
.config(function($provide,$compileProvider){
	$provide.factory("myFactory",function(){
		var service={};
		return service;
	});
	$compileProvider.directive("myDirective",function(){
		return {
			template:"<a href='http://www.baidu.com'>baidu</a>"
		};
	});
});
