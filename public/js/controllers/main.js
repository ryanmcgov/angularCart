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

    $scope.addToCart = function(item) {
        $scope.itemCheckout.push(item);
         
    };

    $scope.removeFromCart = function(item) {
        var toRemove = $scope.itemCheckout.indexOf(item);
        console.log(toRemove);

        $scope.itemCheckout.splice(toRemove, 1);
         
    };

 })
  .controller('ProductCtrl', ['$scope', '$location', 'ProductsSvc', function($scope, $location, ProductsSvc) {
    $scope.products = ProductsSvc.getAllProducts();

    $scope.addProduct = function (product) {
      ProductsSvc.createNewProduct(product);
      $location.path('/admin');

    };

  }]);






























