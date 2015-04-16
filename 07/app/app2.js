/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-15 09:42:04
 * @version $Id$
 */
var appModule = angular.module('app', []);
    appModule.directive('hello', function() {
    return {
        restrict: 'E',
        template: '<div>Hi there<div ng-transclude></div></div>',
        transclude: true
    };
});
