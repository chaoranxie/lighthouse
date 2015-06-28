


(function(){
  'use strict';

angular.module('LighthouseApp', ['ngMaterial', 'users', 'questions', 'restangular'])
              .config(function($mdThemingProvider, $mdIconProvider, RestangularProvider){
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

                          headers['Vnd-HMH-Api-Key']='2591d292db9541834f24cb4e18bb8708'
                          headers['Authorization']='SIF_HMACSHA256 ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJsa1pXNTBhWFI1TG1Gd2FTNW9iV2hqYnk1amIyMGlMQ0poZFdRaU9pSm9kSFJ3T2k4dmQzZDNMbWh0YUdOdkxtTnZiU0lzSW1saGRDSTZNVFF6TlRRMU5qa3pPQ3dpYzNWaUlqb2lZMjVjZFRBd00yUlRZWFZ5YjI0Z1FtRnlZV1JrZFhJc2RXbGtYSFV3TUROa2MyRjFjbTl1TEhWdWFYRjFaVWxrWlc1MGFXWnBaWEpjZFRBd00yUmhZakZsTkRNMlpTMDRNVGMzTFRReE16a3RPR1V5WkMwMU1tRTJaamRoT0dKbE1qY3NaR05jZFRBd00yUXhJaXdpYUhSMGNEb3ZMM2QzZHk1cGJYTm5iRzlpWVd3dWIzSm5MMmx0YzNCMWNtd3ZiR2x6TDNZeEwzWnZZMkZpTDNCbGNuTnZiaUk2V3lKSmJuTjBjblZqZEc5eUlsMHNJbU5zYVdWdWRGOXBaQ0k2SW1RNE5XWTJOakpsTFRZNU5UTXRORGhsT1MwNFlqQmhMV0ZtTldaak1qQmxNMlUyTXk1b2JXaGpieTVqYjIwaUxDSmxlSEFpT2pFME16VTBOakExTXpoOS5vRnU1a0k5LVFMN2JhdnJsRl9sR0FzbGpsRXZUN2pKb2RwMUtvM0RCVk53OllEVlpVWWtOWmVJVmtZcDRjamdFTndVd2IrOTYrSFptK0dWV2xLTWxxY2c9Cg=='

                          return {
                                  element: element,
                                  params: params,
                                  headers: headers,
                                  httpConfig: httpConfig
                          };
                      });

              });

})();

