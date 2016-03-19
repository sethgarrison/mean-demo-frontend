angular.module("l4.api")

  .factory("HTTP", function ($http, base_url, $log, $mdToast) {

    function _http(config) {
      config.cache = true;
      config.url = base_url + config.url;
      return $http(config).then(function (res) {
        $mdToast.showSimple(res.statusText);
        return res;
      });
    }

    function _delete(endpoint, id) {
      var config = {method: "DELETE", url: "/" + endpoint + "/" + id};
      return _http(config);
    }

    function edit(endpoint, data) {
      var config = {method: "PUT", url: "/" + endpoint + "/" + data.id, data: data};
      return _http(config);
    }

    function post(endpoint, data) {
      var config = {method: "POST", url: "/" + endpoint, data: data};
      return _http(config);
    }

    function fetch(endpoint) {
      var config = {method: "GET", url: "/" + endpoint};
      return _http(config);
    }

    function getById(endpoint, id) {
      var config = {method: "GET", url: "/" + endpoint + "/" + id};
      return _http(config);
    }

    return {
      fetch: fetch,
      edit: edit,
      delete: _delete,
      post: post,
      getById: getById,
      request: _http
    }

  });
