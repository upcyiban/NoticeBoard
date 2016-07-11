'use strict';

/**
 * @ngdoc function
 * @name noticeBoardApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the noticeBoardApp
 */
angular.module('noticeBoardApp')
  .controller('AdminCtrl', function ($http, $location, $scope) {

    $http.get(apiURL + 'isadmin').then(function (response){
      if (response.data == 0) {
        $location.url('/')
      }
    });

    $scope.postNew = function () {
      var data = $.param({
        title: $scope.title,
        message: $scope.message,
        tag: 'default'
      });
      $http.post(apiURL + 'postnew', data, postconfig).then(function (response) {
        if (response.data.code == 0){
          console.log("success");
        }
      })
    }

  });
