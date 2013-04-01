'use strict';

angular.module('angularPhonegapTemplateApp')
  .factory('cordovaReady', function () {
    
    //This service checks to see if cordova is loaded before executing device functions
    //if the device isn't ready, it adds the function to a queue and runs it on deviceready

    return function (fn) {
      
        var queue = [];
        
        var impl = function () {
          queue.push(Array.prototype.slice.call(arguments));
        };
        
        document.addEventListener('deviceready', function () {
          queue.forEach(function (args) {
            fn.apply(this, args);
          });
          impl = fn;
        }, false);
        
        return function () {
          return impl.apply(this, arguments);
        };
      };
  });
