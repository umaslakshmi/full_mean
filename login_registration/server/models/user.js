var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Email is required'],
		unique: true
	},
	first_name: {
		type: String,
		minlength: 2,
		required: [true, 'First name is required']
	},
	last_name: {
		type: String,
		minlength: 1,
		required: [true, 'Last name is required']
	},
	password: {
		type: String,
		required: [true, 'Password is required']
	}
}, {timestamps: true});

UserSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

UserSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
}

UserSchema.pre('save', function(done){
	this.password = this.generateHash(this.password);
	done();
});

mongoose.model('User', UserSchema);