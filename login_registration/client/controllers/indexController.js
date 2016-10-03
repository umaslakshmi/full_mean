myApp.controller('indexController', function($scope, $location, userFactory){
	// Here is where we are creating indexController. 
	// You have to make sure that our index controller matches the name 
	// that we pass in, in our router. 
	// So far the only variable that I'm injecting into this controller
	// is $scope.

	//console.log('I am able to load my indexController along with my index partial');

	// dummyFactory.addDummy({name: 'req.body.test', status: 'working'}, function(data){
	// 	console.log(data);
	// })

	$scope.users = [];
	$scope.newuser = {};
	$scope.user = {};
	$scope.currentuser;
	$scope.error;

	$scope.create = function(){
		userFactory.create($scope.newuser, function(data){
			console.log(data);
			console.log(data.data.status);
			if(data.data.status){
				$scope.users.push(data.data.data);
				$scope.currentuser = data.data.data._id;
			}else{
				$scope.error = data.data.error.errors;
			}
			console.log($scope.users);
			$scope.newuser = {};
			$location.url('/');
		})
	}

	$scope.login = function(){
		userFactory.login($scope.user, function(data){
			console.log(data);
			if(data.data.status){
				$scope.currentuser = data.data.data._id;
			}else{
				$scope.error = data.data.error.errors;
			}
			$scope.user = {};
			$location.url('/');
		});
	}

	$scope.logout = function(){
		userFactory.logout(function(){
			$scope.currentuser = false;
			$location.url('/');
		})
	}
})