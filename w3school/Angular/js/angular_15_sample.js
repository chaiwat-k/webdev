// angular_15_sample.js

var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
	
	$scope.message = '';
	
	$scope.left = function(){
		return 100 - $scope.message.length;
	};
	
	$scope.clear = function(){
		$scope.message = '';
	};
	
	$scope.save = function(){
		alert('Note Saved');
	};
	
});