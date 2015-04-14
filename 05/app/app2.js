/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-14 09:56:29
 * @version $Id$
 */
var myApp=angular.module("App",[]);
myApp.directive("myDirective",function(){
	return {
		restrice:"A",
		replace:true,
		scope:{
			myUrl:"=someAttr",
			myLinkText:"@"
		},
		template:"<div><lable>my url field:</label><input type='text' ng-model='myUrl'><a href='{{myUrl}}'>{{myLinkText}}</a></div>"
	};
});
