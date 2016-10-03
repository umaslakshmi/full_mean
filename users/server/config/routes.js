console.log('future routes')

var friends = require('../controllers/friends.js')

module.exports = function(app){
	app.get('/friends', friends.index);
	app.put('/friends/:id', friends.update);
    app.get('/friends/:id', friends.show);
    app.post('/friends', friends.create);
    app.delete('/friends/:id', friends.delete);
}