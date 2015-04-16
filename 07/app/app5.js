/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-15 11:15:39
 * @version $Id$
 */
var myApp=angular.module('App',[]);
myApp.directive("expander",function(){
	return {
		restrict:"EA",
		replace:true,
		transclude:true,
		scope:{
			title:"=expanderTitle"
		},
		template:'<div>'
                 + '<div class="title" ng-click="toggle()">{{title}}</div>'
                 + '<div class="body" ng-show="showMe" ng-transclude></div>'
                 + '</div>',
		link:function(scope,element,attrs){
			scope.showMe=false;
			scope.toggle=function toggle(){
				scope.showMe=!scope.showMe;
			}
		}
	}
});
myApp.controller("SomeController",function($scope){
	$scope.title="点击展开";
	$scope.text="这里是内容部分";
});
