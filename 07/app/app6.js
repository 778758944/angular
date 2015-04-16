/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-16 09:16:36
 * @version $Id$
 */
var myApp=angular.module("App",[]);
myApp.directive("haha",function(){
	return {
		restrict:"E",
		template:function(elem,attr){
			//elem,attr为一个对象和对象内的属性
			// console.log(typeof elem);
			return "<a href="+attr.value+">"+attr.text+"</a>";
		}
		// templateUrl:"temp/temp1.html"
	};
});
myApp.controller("MainController",function($scope){

});
myApp.directive("myDirective",function(){
	return {
		restrice:"EA",
		// scope:false,//可以继承作用域但是不能隔离
		// scope:true,//继承作用域实现隔离,单向绑定
		scope:{},//隔离且不继承
		template:"<div><input tyee='text' ng-model='myProperty'></div>"
	};
});
myApp.directive("myDirective2",function(){
	return {
		restrice:"EA",
		scope:{
			title:"@"
		},
		template:"<div><h1>{{title}}</h1><div ng-transclude></div></div>",
		transclude:true
	};
});
myApp.directive('myLink', function () {
     return {
         restrict: 'EA',
         transclude: true,
         controller:
         function ($scope, $element,$attrs,$transclude) {
         	console.log($element);
         	console.log($attrs);
             $transclude(function (clone) {
                 console.log(clone);              
                 var a = angular.element('<a>');
                 a.attr('href', $attrs.value);
                 a.text(clone.text());
                 $element.append(a);
             });
         }
     };
 });
myApp.directive("myDirective3",function(){
	return {
		restrict:"EA",
		transclude:true,
		template:"<a href='http://www.baidu.com' ng-click='do()'>baidu</a>",
		controller:
		function($scope,$element,$attrs){
			console.log($attrs);
			$scope.do=function(){
				alert("haha");
			}
		}
	};
});