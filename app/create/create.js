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

  CreateController.$inject = ["$scope", "$routeParams", "$location", "UserService", "UserVars"];

  function CreateController($scope, $routeParams, $location, UserService, UserVars) {

    //Asigno el scrope ($scope == this) a la variable vm
    var vm = this;
    vm.roles = [
      {id: 0, name: 'ADMIN'},
      {id: 1, name: 'USUARIO'},
      {id: 2, name: 'PROVEEDOR'}
    ];
    vm.usuario = {
      nombre: '',
      apellido: '',
      mail: '',
      nacionalidad_id: 1,
      tipo_doc: 1,
      nro_doc: '',
      comentarios: '',
      marcado: '',
      telefono: '',
      fecha_nacimiento: '',
      profesion_id: '',
      saldo: '0.0',
      password: '',
      rol_id: 0, //TODO: Just for now: 0 - Admin; 1 - Usuario; 2 - Proveedor
      news_letter: 1
    };

    vm.create = function () {
      console.log(vm.usuario);
      if(vm.usuario.nombre.trim().length == 0) {
        console.log('Nombre obligatorio');
        return;
      }
      if(vm.usuario.apellido.trim().length == 0) {
        console.log('Apellido obligatorio');
        return;
      }
      if(vm.usuario.mail.trim().length == 0) {
        console.log('Mail obligatorio');
        return;
      }
      if(vm.usuario.nro_doc.trim().length == 0) {
        console.log('DNI obligatorio');
        return;
      }
      if(vm.usuario.telefono.trim().length == 0) {
        console.log('Telefono obligatorio');
        return;
      }
      if(vm.usuario.fecha_nacimiento.trim().length == 0) {
        console.log('Fecha de Nacimiento obligatorio');
        return;
      }
      if(vm.usuario.password.trim().length == 0) {
        console.log('Contraseña obligatorio');
        return;
      }
      UserService.create(vm.usuario, function (data) {
        console.log(data);
        $location.path('/list');
      });
    };


  }

})();