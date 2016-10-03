myApp.factory('userFactory', ['$http', function($http){
	var users = [];
	var currentuser;

	function UserFactory(){

		this.create = function(user, callback){
			$http.post('/users', user).then(function(data){
				console.log(data);
				if(data.data.status){
					users.push(data.data.data);
					currentuser = data.data.data._id;
				}else{
					console.log(data.data.error);
				}
				callback(data);
			});
		};

		this.login = function(user, callback){
			$http.post('/sessions', user).then(function(data){
				console.log(data);
				if(data.data.status){
					currentuser = data.data.data._id;
				}else{
					console.log(data.data.error);
				}
				callback(data);
			});
		};

		this.logout = function(callback){
			currentuser = false;
			callback();
		};
	}

	console.log(new UserFactory());
	return new UserFactory;
}]);