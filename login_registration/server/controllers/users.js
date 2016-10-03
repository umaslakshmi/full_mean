var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
	this.create = function(req, res){
		var user = new User({email: req.body.email, first_name: req.body.first_name, last_name: req.body.last_name, password: req.body.password});
		user.save(function(err, result){
			if(err){
				res.json({status: false, error: err});
			}else{
				res.json({status: true, data: result});
			}
		})
	};

	this.login = function(req, res){
		console.log(req.body);
		User.findOne({email: req.body.email}, function(err, result){
			if(err){
				res.json({status: false, error: err});
			}else if(result && result.validPassword(req.body.password)){
				res.json({status: true, data: result});
			}else{
				res.json({status: false, error: {errors: {'password': {'message': 'Password does not match email'}}}});
			}
		});
	}
}

module.exports = new UsersController();