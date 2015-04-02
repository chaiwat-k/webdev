// angular_10_modules_ctrl.js
app.controller("myCtrl", function($scope){
	
	// Scope variables
	
	$scope.count = 0;
	$scope.showB1 = false;
	$scope.showB2 = false;
	$scope.showB3 = false;
	$scope.showB4 = false;
	
	// Scope functions
	
	$scope.toggle = function(n){
		if(!n) return;
		switch(n){
			case 1: $scope.showB1 = !$scope.showB1; break;
			case 2: $scope.showB2 = !$scope.showB2; break;
			case 3: $scope.showB3 = !$scope.showB3; break;
			case 4: $scope.showB4 = !$scope.showB4; break;
		}
	};
});