(function(){
  'use strict';

  angular.module('questions').factory('QuestionRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setBaseUrl('http://localhost:8080/');

      RestangularConfigurer.setFullRequestInterceptor(function(element, operation, route, url, headers, params, httpConfig) {
      return {
              element: element,
              params: params,
              headers: headers,
              httpConfig: httpConfig
            }; // End of return
      }); // End of Config

  }); // End of return
  });// End of Module


angular.module('questions')
         .service('questionService', ['$q', 'QuestionRestangular', QuestionService]);


  function QuestionService($q, QuestionRestangular){


    var questions = QuestionRestangular.all('questions').getList().then(function(questions) {
        debugger;
        questions = []

        return questions
    })
    return {
      loadAllQuestions : function() {
        // Simulate async nature of real remote calls
        return $q.when(questions);
      }
    };

  }



})();
