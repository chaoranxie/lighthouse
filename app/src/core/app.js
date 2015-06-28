(function(){
  'use strict';

angular.module('LighthouseApp', ['ngMaterial', 'users', 'questions', 'assignments', 'dashboard', 'restangular','ui.router'])
              .config(function($mdThemingProvider, $mdIconProvider, RestangularProvider,$stateProvider, $urlRouterProvider){

                  $urlRouterProvider.otherwise("/login");

                  $stateProvider
                    .state('login', {
                      url: "/login",
                      templateUrl: "assets/partials/login.html"
                    })
                    .state('dashboard', {
                      url: "/dashboard",
                      templateUrl: "assets/partials/dashboard.html"
                    })
                    .state('assignment_details', {
                      url: "/assignment_details/:assignmentId",
                      templateUrl: "assets/partials/assignment_details.html"
                    });

                  $mdIconProvider
                      .defaultIconSet("./assets/svg/avatars.svg", 128)
                      .icon("menu"       , "./assets/svg/menu.svg"        , 24)
                      .icon("share"      , "./assets/svg/share.svg"       , 24)
                      .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
                      .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
                      .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
                      .icon("phone"      , "./assets/svg/phone.svg"       , 512);

                      $mdThemingProvider.theme('default')
                          .primaryPalette('brown')
                          .accentPalette('red');

                      RestangularProvider.setBaseUrl('http://sandbox.api.hmhco.com/v1');

                      RestangularProvider.setFullRequestInterceptor(function(element, operation, route, url, headers, params, httpConfig) {
                         debugger;

                          if (url == 'http://sandbox.api.hmhco.com/v1/sample_token'){
                            debugger;
                            headers['Content-Type'] = 'application/x-www-form-urlencoded'
                          } else {
                             headers['Authorization']='SIF_HMACSHA256 ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJsa1pXNTBhWFI1TG1Gd2FTNW9iV2hqYnk1amIyMGlMQ0poZFdRaU9pSm9kSFJ3T2k4dmQzZDNMbWh0YUdOdkxtTnZiU0lzSW1saGRDSTZNVFF6TlRVd01qUTFNeXdpYzNWaUlqb2lZMjVjZFRBd00yUkdjbTlrYnlCQ1lXZG5hVzV6TEhWcFpGeDFNREF6WkdaeWIyUnZYekkzTVN4MWJtbHhkV1ZKWkdWdWRHbG1hV1Z5WEhVd01ETmtPVEkxT1RJMk16Y3ROREk0WlMwMFpqWmtMVGhtWTJFdFltUTNaVGczWlRFMlpqZGlMR1JqWEhVd01ETmtOelEzTnlJc0ltaDBkSEE2THk5M2QzY3VhVzF6WjJ4dlltRnNMbTl5Wnk5cGJYTndkWEpzTDJ4cGN5OTJNUzkyYjJOaFlpOXdaWEp6YjI0aU9sc2lUR1ZoY201bGNpSmRMQ0pqYkdsbGJuUmZhV1FpT2lKa09EVm1Oall5WlMwMk9UVXpMVFE0WlRrdE9HSXdZUzFoWmpWbVl6SXdaVE5sTmpNdWFHMW9ZMjh1WTI5dElpd2laWGh3SWpveE5ETTFOVGc0TkRVemZRLjdnWkxSVFZINHc4cjZpUE02cGRZb2RsaWgtX2s1amVQa1g2TlVRVDRTNlE6cW5pcmsreitVTWcxUXJMbllMMXBCT0VXRG5pTzdtR3NyT1NKZVhIa1hlMD0K'
                          }

                          headers['Vnd-HMH-Api-Key']='2591d292db9541834f24cb4e18bb8708'

                          return {
                                  element: element,
                                  params: params,
                                  headers: headers,
                                  httpConfig: httpConfig
                          };
                      });

              });

})();

