var myApp= angular.module("myApp", ['ngRoute']);

/*
the default hash-prefix used for $location hash-bang URLs has changed 
from the empty string ('') to the bang ('!').

If you actually want to have no hash-prefix, then you can restore the 
previous behavior by adding a configuration block to your application:

*/
myApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

myApp.config(["$routeProvider", function($routeProvider,$location){

	$routeProvider
		.when("/", {
			templateUrl :'pages/main.html',
			controller: "MainCtrl"
		})
		.when("/second", {
			templateUrl :'pages/second.html',
			controller: "SecondCtrl"
		})		
		.when("/second/:num", {
			templateUrl :'pages/second.html',
			controller: "SecondCtrl"
		})
}])

myApp.controller("MainCtrl",["$scope", "$log", "$location",  
	function($scope, $log, $location){	
		$scope.title ="This Is Main Page";
	}
])

myApp.controller("SecondCtrl",["$scope", "$log", "$location", "$routeParams",

  function($scope, $log, $location, $routeParams){	
		$scope.title ="This Is Second Page";
		$scope.num = $routeParams.num || 1;
	}
])