'use strict';

/**
 * @ngdoc overview
 * @name noticeBoardApp
 * @description
 * # noticeBoardApp
 *
 * Main module of the application.
 */
angular
  .module('noticeBoardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl',
        controllerAs: 'edit'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// var baseURL = "http://yb.upc.edu.cn:8087/";
// var apiURL = "http://yb.upc.edu.cn:8087/bbs/";
// var appid = "2ea80ee142309362";
// var redirectURL = "http://f.yiban.cn/iapp54333";

var baseURL = "http://localhost:8087/";
var apiURL = "http://localhost:8087/bbs/";
var appid = "acaec190548725cf";
var redirectURL = "http://f.yiban.cn/iapp54099";

var postconfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
  }
};
