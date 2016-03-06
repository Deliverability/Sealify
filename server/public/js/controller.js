var app = angular.module("myApp", []);


app.controller('controller', ['$scope', '$http', '$cookie' function($scope, $http, $cookie) { 
  $scope.cancel = function() {
          $scope.contact = "";
  };

    
  $http.get('/api/mail').success(function(response) {
      console.log("Mail Received");
      console.log(response);
      $scope.mailbox = response;
                  
  });
}]);
