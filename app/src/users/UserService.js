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

    var users = Restangular.all('assignments').getList().then(function(assignments) {
        debugger;
        users = []
        for (var i = 0; i < assignments.length; i++) {
            var assignment = {}
            assignment['name']=assignments[i].name
            assignment['content']=assignments[i].description
            users.push(assignment)
        }
        return users
    })


    var users = Restangular.all('assignments').getList().then(function(assignments) {
        debugger;
        users = []
        for (var i = 0; i < assignments.length; i++) {
            var assignment = {}
            assignment['name']=assignments[i].name
            assignment['content']=assignments[i].description
            users.push(assignment)
        }
        return users
    })
    Restangular.one('assignments', 'bd1d54c3-4bd6-4a0c-8708-fabe727d0278').get().then(function(assignments) {
        debugger;
    })


    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
