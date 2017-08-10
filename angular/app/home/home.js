'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', 'FileUploader',function($scope, FileUploader) {
  $scope.post = {text: ""};

  $scope.fileUploader = new FileUploader({
      url: "http://localhost:3000/upload",
      alias: "avatar",
      onBeforeUploadItem: function (item) {
          item.formData = [{
              content: $scope.post.content,
            user: $scope.post.user
          }];
      },
      onSuccessItem: function (item, response, status, headers) {

      }
  });

  $scope.createPost = function(){
    $scope.fileUploader.uploadAll();
  };
}]);