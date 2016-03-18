(function () {
  'use strict';

  angular
    .module('l4.api')
    .service('Model', Model);

  /** @ngInject */
  function Model(HTTP) {

    function Model(data) {
      this.data = data || {};

      this.delete = function () {
        return HTTP.delete(this.endpoint, this.data.id);
      };

      this.create = function () {
        return HTTP.post(this.endpoint, this.data);
      };

      this.edit = function () {
        return HTTP.edit(this.endpoint, this.data);
      };
    }

    return Model;
  }

})();
