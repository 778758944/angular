/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-13 11:06:37
 * @version $Id$
 */
var myApp=angular.module("App",["ngMessages"]);
myApp.controller("SignupController",function($scope){
	$scope.submitted=false;
	$scope.signupForm=function(){
		if($scope.signup_form.$valid){
			alert("right");
			//normal post
		}else{
			alert("wrong");
			$scope.signup_form.submitted=true;
		}
	};
});
