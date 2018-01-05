'use strict';

(function () {
	angular.module('myApp', ['ngRoute'])

	.config(['$routeProvider', config]);


	function config($routeProvider) {
		$routeProvider
		.when('/login', {
			templateUrl: '/partials/login.html',
			controller: 'LoginCtrl as loginCtrl'
		})
		.when('/register', {
			templateUrl: '/partials/register.html',
			controller: 'RegisterCtrl as registerCtrl'
		})
		.when('/todos', {
			templateUrl: '/partials/todo.html',
			controller: 'TodoCtrl as todoCtrl'
		})
		.otherwise('/login')

	}
})();