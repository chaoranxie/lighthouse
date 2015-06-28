(function(){
  'use strict';

angular.module('assignments')
         .service('assignmentService', ['$q', 'Restangular', AssignmentService]);


  function AssignmentService($q, Restangular){

    var assignments = Restangular.all('assignmentSubmissions').getList().then(function(assignments) {

        return assignments
    })
    return {
      loadAllAssignments : function() {
        // Simulate async nature of real remote calls
        return $q.when(assignments);
      }
    };

  }



})();
