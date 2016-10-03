console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
// constructor for our factory
	var friends = [];
	var friend = [];
	function FriendsFactory(){
		var _this = this;
		this.create = function(newfriend,callback){
		  $http.post('/friends', newfriend).then(function(returned_data){
		    console.log(returned_data.data);
		    friends = returned_data.data;
		    if (typeof(callback) == 'function'){
		      callback(returned_data.data);
		    }
		  });
		};
		this.update = function(friend, _id, callback){ // what parameters do we need?
		  // Your code here
		  var url = '/friends/' + _id;
		  console.log(url);
		  $http.put(url, friend).then(function(data){
		  	for (var i = 0; i < friends.length; i++) {
	          if (friends[i]._id === _id) friends[i] = friend;
	        }
	        callback(friend);
		  })
		};
		this.index = function(callback){
		  //call this method if you want to update or set the friends variable
		  $http.get('/friends').then(function(returned_data){
		    console.log(returned_data.data);
		    friends = returned_data.data;
		    callback(friends);
		  });
		//Note: this can be shortened to $http.get('/friends').then(callback); 
		//But only if you only want to run the callback from the controller.
		};
		this.delete = function(id, callback){// what parameters do we need?
		    // Your code here
		    console.log(id);
		    $http.delete(('/friends/' + id)).then(function(returned_data){
		    	//friends = returned_data.data;
		    	callback(returned_data);
		    })
		};
		this.show = function(id, callback){// what parameters do we need?
		    // Your code here
		    $http.get('/friends/' + id).then(function(returned_data){
		    	//console.log(returned_data.data);
		    	callback(returned_data.data);
		    })
		};
		// Sometimes you might not want to make a DB call, and just get the information stored in the factory.
		this.getFriends = function(callback){
			console.log(friends);
		  callback(friends);
		};
		this.getFriend = function(callback){
		    callback(friend);
		};
	}
	console.log(new FriendsFactory());
	return new FriendsFactory();
}]);