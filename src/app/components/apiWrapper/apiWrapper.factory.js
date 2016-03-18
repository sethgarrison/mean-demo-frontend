(function() {
    'use strict';

    angular
        .module('l4.api')
        .service('api', api);

    /** @ngInject */
    function api(Employees) {
        var api = {
            Employees: Employees
        };

        return api;
    }

})();
