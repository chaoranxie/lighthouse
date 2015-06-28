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
    var newAccount= {'client_id':'d85f662e-6953-48e9-8b0a-af5fc20e3e63.hmhco.com',
                      'grant_type':'password','username':'frodo_271', 'password':'password'}

    self.user = Restangular.all('sample_token').customPOST(
        newAccount,
        undefined, // put your path here
        newAccount, // params here, e.g. {format: "json"}
        {'Content-Type': "application/x-www-form-urlencoded"}
      )

    // .then(function(user){
    //     self.user = user
    //   debugger;
    // }

    function actualLogin(username, password){
          debugger;

    }
    // Promise-based API
    return {
      loginUser : function(username, password) {
        // Simulate async nature of real remote calls

        return $q.when(actualLogin(username, password));
      },
      getUser : function() {
        // Simulate async nature of real remote calls
        debugger;
        return self.user;
      }
    };
  }

})();
