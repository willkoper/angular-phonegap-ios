'use strict';

angular.module('angularPhonegapTemplateApp')
  .factory('geolocation', function ($rootScope, cordovaReady) {
    // Service logic
    // ...
  return {
    getCurrentPosition: cordovaReady(function (onSuccess, onError, options) {
      navigator.geolocation.getCurrentPosition(function () {
        var that = this,
          args = arguments;
          
        if (onSuccess) {
          $rootScope.$apply(function () {
            onSuccess.apply(that, args);
          });
        }
      }, function () {
        var that = this,
          args = arguments;
          
        if (onError) {
          $rootScope.$apply(function () {
            onError.apply(that, args);
          });
        }
      },
      options);
    })
  };
  });
