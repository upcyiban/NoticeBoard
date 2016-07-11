'use strict';

/**
 * @ngdoc function
 * @name noticeBoardApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the noticeBoardApp
 */
angular.module('noticeBoardApp')
  .controller('LoginCtrl', function ($window, $scope) {
    $scope.oauth = function () {
      $window.location.href = "https://openapi.yiban.cn/oauth/authorize?client_id=" + appid + "&redirect_uri=" + redirectURL + "&display=html";
    };
  });
