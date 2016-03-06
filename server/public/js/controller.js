var app = angular.module("myApp", []);

app.controller('controller', ['$scope', '$http', function($scope, $http) { 
  $scope.cancel = function() {
          $scope.contact = "";
  };

    
  $http.get('/api/mail').success(function(response) {
      console.log("Mail Received");
      console.log(response);
      $scope.mailbox = response;
                  
  });

  console.log('test');
  console.log("test");
  $scope.login = function() {
      console.log("test");
    $http.get('/api/login?user='+$scope.login.user+'&pass='+$scope.login.pass).success(function(response) {
      console.log(response);
    });
  };
}]);
