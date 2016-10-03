console.log('friends controller');

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend')

function FriendsController(){
  this.index = function(req,res){
    //your code here
    //res.json({placeholder:'index'});
    console.log('index method in friends controller');
    Friend.find({}, function(err, friends){
      if(err){
        res.send(err);
      }else{
        res.json(friends);
      }
    })
  };
  this.create = function(req,res){
    //your code here
    //res.json({placeholder:'create'});
    var newFriend = new Friend({first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday});
    newFriend.save(function(err, result){
      if(err){
        res.send(err);
      }else{
        res.json({status: true, data: result})
      }
    })
  };
  this.update = function(req,res){
    //your code here
    //res.json({placeholder:'update'});
    console.log('in update method in friends controller');
    Friend.update({_id: req.params.id}, {first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday}, function(err, friend){
      if(err){
        console.log(err);
        res.json({status: false, error: err});
      }else{
        console.log('redirecting to main page');
        res.json({status: true, data: friend})
      }
    });

  };
  this.delete = function(req,res){
    //your code here
    //res.json({placeholder:'delete'});
    Friend.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
        res.json({status: false, error: err});
      }else{
        res.json({status: true});
      }
    })
  };
  this.show = function(req,res){
    //your code here
    //res.json({placeholder:'show'});
    console.log('finding friend');
    console.log(req.params.id);
    var friend = Friend.find({_id: req.params.id}, function(err, friend){
      if(err){
        res.send(err);
      }else{
        console.log(friend);
        res.json(friend);
      }
    })
  };
}
module.exports = new FriendsController();