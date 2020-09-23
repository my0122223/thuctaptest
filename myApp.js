var app = angular.module('myApp',['ngRoute']);
app.config(function ($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'home.html'
        })
        .when('/red',{
            templateUrl: 'gioithieu.html',

        })
        .when('/blue',{
            templateUrl: 'lienhe.html',
        })
        .otherwise({
            redirectTo: '/'
        })
});
app.controller('redCtrl', function($routeParams){
    this.msg = 'I am Red',
    this.strid = $routeParams.id;
});
app.controller('blueCtrl', function($scope, $routeParams){
    $scope.msg = 'I am blue',
    $scope.strid = $routeParams.id;
    $scope.strname = $routeParams.name;
});