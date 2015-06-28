(function(){

  angular.module('questions').controller('QuestionController', [
          'questionService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          QuestionController
       ]);


  function QuestionController(questionService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;
    debugger;

    self.questions = []
    questionService
      .loadAllQuestions()
      .then( function( questions ) {
        self.questions = questions
      });


  }

})();
