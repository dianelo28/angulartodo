angular.module('starter.controllers',[])
	.controller("ToDoCtrl",['$scope','$location',
		function($scope, $location){
			$scope.todos = [];
			$scope.addToDo = function(){
				$scope.todos.push($scope.todo);
				$scope.todo = "";
			};
			$scope.remove = function(todo){
				var index = $scope.todos.indexOf(todo);
				$scope.todos.splice(index, 1)
			};
			$scope.date = new Date()

			$scope.addList = function(){
				$scope.lists = [];
				$scope.lists.push($scope.list.title);
				$location.path('/lists/' + $scope.list.title)
			}
	}]);
