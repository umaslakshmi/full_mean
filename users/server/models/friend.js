console.log('friends model');
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	first_name: {type: String},
	last_name: {type: String},
	birthday: {type: String}
}, {timestamps: true})
mongoose.model('Friend', FriendSchema);