/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-12 15:58:56
 * @version $Id$
 */
var MyApp=angular.module("App",[]);
MyApp.controller("MyController",function($scope,$parse){//注入$parse可以在控制器中解析表达式
	$scope.$watch("expr",function(newval,oldval,scope){
		if(newval!==oldval){
			var parseFun=$parse(newval);
			$scope.parseValue=parseFun(scope);//what mean of scope
		}
	});
});
MyApp.controller("MyController2",function($scope,$interpolate){//制造插值字符串
	$scope.haha="hhhh";
	$scope.$watch('emailBody', function(body) {
		if(body){
		var template=$interpolate(body);
		$scope.previewText=template({to:$scope.to},{add:$scope.haha});
	}
	});
});
