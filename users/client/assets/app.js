var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
	$routeProvider
		.when('/new', {
			controller: 'newController',
			templateUrl: 'partials/new.html'
		})
		.when('/edit/:id', {
			controller: 'editController',
			templateUrl: 'partials/edit.html'
		})
		.when('/', {
			controller: 'indexController',
			templateUrl: 'partials/index.html'
		})
		.when('/show/:id', {
			controller: 'showController',
			templateUrl: 'partials/show.html'
		})
		.otherwise({
			redirectTo: '/new'
		})
});