(function() {
  'use strict';

  angular
    .module('mean3Frontend')
    .directive('l4Navbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      replace:true,
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;
      vm.appName = "l4 Digital";
      vm.now = new Date().getTime();
    }
  }

})();
