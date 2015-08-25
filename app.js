angular.modules('starter', [ngRoute])

	.config(['$routeProvider',
	   function($routeProvider) {
	     $routeProvider.
	       when('/', {
	         templateUrl: 'templates/todos.html',
	         controller: 'TodoCtrl'
	       })
	       otherwise({
	         redirectTo: '/'
	       });
	       
	.controller("MainCtrl", ['$scope', '$rootScope', 
		function($scope, $rootScope){
			$scope.term = "cellar door";
			$scope.showAlert = function(){
				alert($scope.term);
		};
	}])
	.controller("ToDoCtrl",['$scope', 
		function($scope){
			$scope.todos = [];
			$scope.addToDo = function(){
				$scope.todo.completed = false;
				$scope.todos.push($scope.todo);
				$scope.todo = "";
		}
			$scope.remove = function(todo){
				var index = $scope.todos.indexOf(todo);
				$scope.todos.splice(index, 1)
		}
			$scope.date = new Date()

	}])
