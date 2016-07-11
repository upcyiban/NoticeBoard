'use strict';

/**
 * @ngdoc function
 * @name noticeBoardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noticeBoardApp
 */
angular.module('noticeBoardApp')
  .controller('MainCtrl', function ($location, $http) {

    var verify_request = $location.search().verify_request;
    if (verify_request != null){
      $http.get(apiURL + 'auth?vq=' + verify_request).then(function (response) {
        var data = response.data;
        if (data == 1){
          //$location.url('admin');
        }
      });
    }

  });
