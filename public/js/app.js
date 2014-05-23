'use strict';

angular
  .module('shoppingBlog', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/blog', {
        templateUrl: 'views/blog-list.html',
        controller: 'PostsCtrl'
      })
      .when('/new', {
        templateUrl: 'views/blog-create.html',
        controller: 'PostsCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/blog-detail.html',
        controller: 'PostCtrl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/blog-editDetail.html',
        controller: 'PostCtrl'
      })
      .when('/store', {
        templateUrl: 'views/shopFront.html',
        controller: 'CheckoutCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/storeControl.html',
        controller: 'PostCtrl'
      })
      .when('/admin/:id/edit', {
        templateUrl: 'views/shopEdit.html',
        controller: 'ProductCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });



















