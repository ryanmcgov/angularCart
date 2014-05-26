'use strict';

angular.module('shoppingBlog')
  .controller('PostsCtrl', function ($scope, $location, PostsSvc) {

    $scope.createPost = function() {
    	$location.path('/new');
    };
    $scope.newPost = function(post) {
    	PostsSvc.create(post)
    	$location.path('/blog');
    };
    $scope.posts = PostsSvc.query();
  })
  .controller('PostCtrl', function($scope, $location, $routeParams, PostSvc) {

  	$scope.post = PostSvc.show({ id: $routeParams.id });
  	$scope.delete = function() { 
  		PostSvc.delete({ id: $routeParams.id });
  		$location.path('/blog');
  	};
  	$scope.edit = function() {
  		PostSvc.edit($scope.post);
  		$location.path('/blog');
  	};

  })
  .controller('CheckoutCtrl', function ($scope) {
    $scope.itemCheckout = [];
    $scope.products = ProductsSvc.query();

    $scope.addToCart = function(product) {
        $scope.itemCheckout.push(product);
         
    };

    $scope.removeFromCart = function(product) {
        var toRemove = $scope.itemCheckout.indexOf(product);
        console.log(toRemove);

        $scope.itemCheckout.splice(toRemove, 1);
         
    };

 })
  .controller('ProductCtrl', ['$scope', '$location', 'ProductsSvc', function($scope, $location, ProductsSvc) {
    $scope.addProduct = function (product) {
      ProductsSvc.create(product);
      $location.path('/admin');
    };

    $scope.post = ProductSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      PostSvc.delete({ id: $routeParams.id });
      $location.path('/admin');
    };
    $scope.edit = function() {
      PostSvc.edit($scope.post);
      $location.path('/admin');
    };

    $scope.products = ProductsSvc.query();

  }]);






























