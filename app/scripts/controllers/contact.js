'use strict';

/**
 * @ngdoc function
 * @name noticeBoardApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the noticeBoardApp
 */
angular.module('noticeBoardApp')
  .controller('ContactCtrl', function ($scope, $http, $window) {

    $scope.noauth = true;
    $scope.message_area = '请先进行易班授权';

    $http.get(apiURL + 'isauth').then(function (response){
      if (response.data === 1) {
        $scope.noauth = false;
        $scope.message_area = '';

        $scope.submitFeedBack = function () {
          var data = $.param({
            appname: "bbs",
            message: $scope.message_area
          });
          $http.post(baseURL + 'feedback', data, postconfig)
            .then(function (response) {
            if (response.data.code === 0) {
              alert('反馈成功,感谢您的意见。');
              $scope.message = '';
            }else {
              alert('未知错误,静待修复。');
            }
          });
        }

      }else {
        $scope.goAuth = function () {
          $window.location.href = "https://openapi.yiban.cn/oauth/authorize?client_id=" + appid + "&redirect_uri=" + redirectURL + "&display=html";
        }
      }
    });

  });
