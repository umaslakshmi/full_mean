app.controller('showController', function($scope, $routeParams, friendsFactory){
	$scope.getUser = function(){
		friendsFactory.show($routeParams.id, function(friend){
			console.log(friend);
			$scope.friend = friend[0];
			console.log($scope.friend);
		})
	}

	$scope.getUser();
})