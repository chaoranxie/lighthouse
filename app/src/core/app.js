


(function(){
  'use strict';

angular.module('LighthouseApp', ['ngMaterial', 'users', 'restangular'])
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
                          headers['Authorization']='SIF_HMACSHA256 ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJsa1pXNTBhWFI1TG1Gd2FTNW9iV2hqYnk1amIyMGlMQ0poZFdRaU9pSm9kSFJ3T2k4dmQzZDNMbWh0YUdOdkxtTnZiU0lzSW1saGRDSTZNVFF6TlRRME1USXdPU3dpYzNWaUlqb2lZMjVjZFRBd00yUkhZVzVrWVd4bUlFZHlaWGtzZFdsa1hIVXdNRE5rWjJGdVpHRnNabDh5TnpFc2RXNXBjWFZsU1dSbGJuUnBabWxsY2x4MU1EQXpaRFF5TkdZNU1XVTBMV1JsWVdRdE5ERTFOeTA0TlRsa0xUUXlNekppTlRVd1lqZzJOeXhrWTF4MU1EQXpaRGMwTnpjaUxDSm9kSFJ3T2k4dmQzZDNMbWx0YzJkc2IySmhiQzV2Y21jdmFXMXpjSFZ5YkM5c2FYTXZkakV2ZG05allXSXZjR1Z5YzI5dUlqcGJJa2x1YzNSeWRXTjBiM0lpWFN3aVkyeHBaVzUwWDJsa0lqb2lOek14T0RRNE5EUXROMkpqWXkwME5XTXlMVGs1TXpJdE1tWXdaVGd5WXpBd1ltWmpMbWh0YUdOdkxtTnZiU0lzSW1WNGNDSTZNVFF6TlRRME5EZ3dPWDAuWm9IQ08tNUdjZUhfelRqQV84WUhVaEVXRllRSnA4djlhS3ZYM0IzZmNpYzpRNy8rK29zM1ZOTUZ4KzlRYlhCUTZkWmd2S3IxTVF4Rm9kZ3RhN0Fna2ZzPQo='

                          return {
                                  element: element,
                                  params: params,
                                  headers: headers,
                                  httpConfig: httpConfig
                          };
                      });

school:a45f7f5b-c729-43fd-892a-997a3ffaadf7

              });

})();

