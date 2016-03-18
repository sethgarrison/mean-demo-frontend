(function() {
  'use strict';

  angular
    .module('mean3Frontend')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
