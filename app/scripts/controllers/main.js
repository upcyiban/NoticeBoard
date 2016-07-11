'use strict';

/**
 * @ngdoc function
 * @name noticeBoardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noticeBoardApp
 */
angular.module('noticeBoardApp')
  .controller('MainCtrl', function ($location, $http, $scope) {

    $scope.isadmin = false;

    var verify_request = $location.search().verify_request;
    $location.url('/');
    if (verify_request != null) {
      $http.get(apiURL + 'auth?vq=' + verify_request).then(function (response1) {
        if (response1.data == 1){
          $http.get(apiURL + 'isadmin').then(function (response2) {
            if (response2.data == 1){
              $scope.isadmin = true;
            }
          })
        }
      });
    }else {
      $http.get(apiURL + 'isadmin').then(function (response) {
        if (response.data == 1) {
          $scope.isadmin = true;
        }
      });
    }

    $http.get(apiURL + 'getall').then(function (response) {
      console.log(response.data);
      $scope.newslists = response.data;
    });

  });
