'use strict';

/**
 * @ngdoc function
 * @name noticeBoardApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the noticeBoardApp
 */
angular.module('noticeBoardApp')
  .controller('EditCtrl', function ($http, $location) {

    $http.get(apiURL + 'isadmin').then(function (response){
      if (response.data == 0) {
        $location.url('/')
      }
    });

    

  });
