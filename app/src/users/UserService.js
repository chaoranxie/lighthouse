(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', 'Restangular', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q, Restangular){


    debugger;
    var Restangular = Restangular


    function actualLogin(username, password){
          debugger;

    }
    // Promise-based API
    return {
      loginUser : function(username, password) {
        // Simulate async nature of real remote calls

        return $q.when(actualLogin(username, password));
      }
    };
  }

})();
