(function() {
  'use strict';

  angular
    .module('mean3Frontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(api, $log, lodash) {
    var vm = this;

    vm.hello = 'hello';
    vm.employees = new api.Employees();

    vm.employees.fetch().then(function(res){
      $log.info("res", res);
    });

    vm.deleteEmployee = function(employee){
      employee.delete().then(function(){
        lodash.remove(vm.employees.data, employee);
      });
    };

    vm.addNewEmployee = function(){
      vm.employees.addNew();
    };

  }
})();
