(function () {
  'use strict';

  angular.module('teo.list', [
    'ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/list', {
      templateUrl: 'list/list.html',
      controller: 'ListController'
    });
  }])
  .controller('ListController', ListController) //Defino el controllador de la vista
  .service('ListService', ListService);         //Defino un servicio

  //Injecto los modulos y el servicio que estoy definiendo
  ListController.$inject = ["$scope", "$routeParams", "$location", "ListService",
                    "UserService", "UserVars"];
  //agrego los dos servicios creados por Ariel para poder recuperar la info de la db
  //Se aplica el DI (Dependency Injection)


  //Defino el constructor, paso el scope para poder hacer el binding entre la vista y el controller
  //Paso los dos servicios como parametros 'UserService', 'UserVars'
  function ListController($scope, $routeParams, $location, ListService, UserService, UserVars) {

    //Asigno el scrope ($scope == this) a la variable vm
    var vm = this;
    vm.usuarios = [];
    vm.start = 0;
    vm.pagina = UserVars.pagina;
    UserVars.paginacion = 5;
    vm.end = UserVars.paginacion;

    UserService.get(function (data) {
      console.log(data);
      vm.usuarios = data;
    });

    vm.next = function () {
      vm.start = UserService.next().start;
      vm.pagina = UserVars.pagina;
    };

    vm.prev = function () {
      vm.start= UserService.prev().start;
      vm.pagina = UserVars.pagina;
    };

    vm.goToPagina = function () {
      vm.start= UserService.goToPagina(vm.pagina).start;
    };

    vm.edit = function(id) {
      console.log(id);
      $location.path('edit/' + id);
    }

  }

  /***********************************************************************************/
  ListService.$inject = ['$http'];

  function ListService($http) {
    var service = {};

    return service;

  }

})();