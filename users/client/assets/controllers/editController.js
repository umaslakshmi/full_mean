app.controller('editController', function($scope, $location, $routeParams, friendsFactory){
	$scope.getUser = function(){
		friendsFactory.show($routeParams.id, function(friend){
			//console.log(friend);
			$scope.friend = friend[0];
			//console.log($scope.friend);
		})
	}

	$scope.getUser();

	$scope.updateUser = function(){
		friendsFactory.update($scope.friend, $routeParams.id, function(friend){
			console.log(friend);
			$location.url('/');
		})
	}
})