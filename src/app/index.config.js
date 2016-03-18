(function() {
  'use strict';

  angular
    .module('mean3Frontend')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
