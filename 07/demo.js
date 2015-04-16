/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-15 08:17:08
 * @version $Id$
 */
angular.module('myApp', [])
.directive('myDirective', function() {
		return {
		restrict: String,//指令以何种方式调用
		priority: Number,//声明优先级
		terminal: Boolean,//停止运行本元素上比该指令优先级低的指令
		template: String or Template Function://模版必须有根节点
		function(tElement, tAttrs) (...},
		templateUrl: String,//一个模版链接
		replace: Boolean or String,//替换指令或者插入指令内部
		scope: Boolean or Object,//dom属性绑定用@，作用域双向邦迪用=，父级作用域绑定&
		transclude: Boolean,
		controller: String or
		function(scope, element, attrs, transclude, otherInjectables) { ... },//可以查找或者新建一个控制器
		controllerAs: String,//控制器的别名
		require: String,
		link: function(scope, iElement, iAttrs) { ... },
		compile: // 返回一个对象或连接函数，如下所示：
		function(tElement, tAttrs, transclude) {
		return {
		pre: function(scope, iElement, iAttrs, controller) { ... },
		post: function(scope, iElement, iAttrs, controller) { ... }
		}
		// 或者
		return function postLink(...) { ... }
}