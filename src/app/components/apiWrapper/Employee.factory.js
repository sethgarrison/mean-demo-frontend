(function() {
    'use strict';

    angular
        .module('l4.api')
        .service('Employee', Employee);

    /** @ngInject */
    function Employee(Model) {

        function Employee(data){
            Model.call(this, data);
            this.endpoint = 'employees';
        }

        return Employee;
    }

})();
