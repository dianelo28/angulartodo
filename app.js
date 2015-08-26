var app = angular.module('starter', ['ngRoute', 'starter.controllers'] )
 
	.config(['$routeProvider',
	function($routeProvider) {
     $routeProvider.
       when('/', {
         templateUrl: 'templates/todos.html',
         controller: 'ToDoCtrl'
       }).
       when('/about-us', {
       	 templateUrl: 'templates/about-us.html',
       	 controller: 'ToDoCtrl'

       }).
       when('/lists', {
       	 templateUrl: 'templates/list-index.html',
       	 controller: 'ToDoCtrl'

       }).
       when('/lists/new', {
       	 templateUrl: 'templates/lists-new.html',
       	 controller: 'ToDoCtrl'
       }).
       when('/lists/:title', {
       	 templateUrl: 'templates/list-show.html',
       	 controller: 'ToDoCtrl'
       }).
       otherwise({
         redirectTo: '/'
       });
	}]);

	// .controller("MainCtrl", ['$scope', '$rootScope', 
	// 	function($scope, $rootScope){
	// 		$scope.term = "cellar door";
	// 		$scope.showAlert = function(){
	// 			alert($scope.term);
	// 	}
	
app.directive('currentWeather', function() {
    return {
      restrict: 'E',
      scope: {
        city: '@'
      },
      template: '<div class="current-weather"><h4>Weather for {{city}}</h4>{{weather.main.temp}}</div>',
      //tempalteUrl: 'templates/current-weather-template.html',
      //transclude: true,
      controller: ['$scope', '$http',
        function ($scope, $http) {
          var url = "http://api.openweathermap.org/data/2.5/weather?mode=json&cnt=7&units=imperial&callback=JSON_CALLBACK&q="
          $scope.getWeather = function(city) {
            $http({ method: 'JSONP', url: url + city })
              .success(function(data) {
                $scope.weather = data;
              });
          }
      }],
      link: function (scope, element, attrs) {
        scope.weather = scope.getWeather(attrs.city);
      }
    }
  });
