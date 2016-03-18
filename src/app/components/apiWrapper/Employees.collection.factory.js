(function () {
  'use strict';

  angular
    .module('l4.api')
    .service('Employees', Employees);

  /** @ngInject */
  function Employees(Collection, Employee) {

    function Employees(data) {
      Collection.call(this, Employee, data);
      this.endpoint = "employees";
    }

    return Employees;
  }

})();
