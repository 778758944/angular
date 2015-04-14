/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-14 09:13:09
 * @version $Id$
 */
var myApp=angular.module("App",[]);
myApp.directive("myDirective",function(){//传入的字符串是指令的名字，驼峰命名，函数返回对象
	return {
		restrict:"A",//以哪种方式调用指令，a属性，e元素，c类，M注释
		scope:{
			myUrl:"@",
			myLinkText:"@"
		},
		replace:true,//取代指令
		template:"<a href='{{myUrl}}'>"+"{{myLinkText}}</a>"//html模版
	};
});
