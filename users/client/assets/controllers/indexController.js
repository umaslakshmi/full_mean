app.controller('indexController', function($scope, $location, friendsFactory){
	$scope.friends = [];
	friendsFactory.index(function(data){
		$scope.friends = data;
	});
	//console.log($scope.friends);

	$scope.show = function(id){
		$location.url('/show/' + id);
	}

	$scope.delete = function(id){
		console.log(id);
		friendsFactory.delete(id, function(data){
			if(data.status){
				console.log('deleted friend');
				friendsFactory.index(function(data){
					$scope.friends = data;
				});
				$location.url('/');
			}else{
				$scope.errors = data.error;
				$location.url('/');
			}
		})
	}
})