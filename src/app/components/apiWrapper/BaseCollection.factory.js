(function () {
  'use strict';

  angular
    .module('l4.api')
    .service('Collection', Collection);

  /** @ngInject */
  function Collection(HTTP, lodash) {

    function Collection(ModelClass, data) {
      var collection = this;
      this.ModelClass = ModelClass;
      this.data = [];

      if (data) {
        createCollection(data);
      }

      function createCollection(data) {
        collection.data = lodash.map(data, function (item) {
          return new collection.ModelClass(item);
        });
      }

      this.addNew = function () {
        this.data.push(new collection.ModelClass());
      };

      this.fetch = function () {
        return HTTP.fetch(this.endpoint).then(function (res) {
          createCollection(res.data);
          return collection.data;
        });
      };
    }

    return Collection;
  }

})();
