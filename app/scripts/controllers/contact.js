'use strict';

/**
 * @ngdoc function
 * @name noticeBoardApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the noticeBoardApp
 */
angular.module('noticeBoardApp')
  .controller('ContactCtrl', function ($scope) {

    $scope.noauth = true;
    $scope.auth_notice = "请先进行易班授权"

  });
