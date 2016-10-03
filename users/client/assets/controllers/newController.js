app.controller('newController', function($scope, $location, friendsFactory){
	$scope.create = function(){
		friendsFactory.create($scope.friend, function(data){
			console.log(data);
			if(data.error){
				$scope.error = data.error;
			}else{
				$location.path('/')
			}
		})
	}
})