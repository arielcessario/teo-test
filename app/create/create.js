(function () {
  'use strict';

  angular.module('teo.create', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/create/:id', {
      templateUrl: 'create/create.html',
      controller: 'CreateController'
    });
  }])
  .controller('CreateController', CreateController);

  CreateController.$inject = ["$scope", "$routeParams", "$location"];

  function CreateController($scope, $routeParams, $location) {

    //Asigno el scrope ($scope == this) a la variable vm
    var vm = this;


  }

})();