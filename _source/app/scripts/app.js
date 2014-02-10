/* Business Card Maker app
 */
var app = angular.module('businessCardMaker', [
	'ngRoute',
	'ngTouch',
	'angular-meditor'
]).config(function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'views/cardeditor.html',
		controller: 'MainCtrl',
		reloadOnSearch: false
	}).otherwise({
		redirectTo: '/?theme=0'
	});

});

app.run(function($rootScope, $route) {});