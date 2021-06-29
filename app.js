var app = angular.module('myApp', ['ngRoute']);
 
app.config(function($routeProvider) {
$routeProvider
 
.when('/', {
templateUrl : '/home.html',
controller : 'HomeController'
})
 
.when('/book', {
templateUrl : '/book.html',
controller : 'BookController'
})
 
.when('/contact', {
templateUrl : '/contact.html',
controller : 'ContactController'
})

.when('/about', {
    templateUrl : '/about.html',
    controller : 'AboutController'
    })

    .when('/popularbooks', {
        templateUrl : '/popularbooks.html',
        controller : 'PopularbooksController'
        })
    
        .when('/author', {
            templateUrl : '/author.html',
            controller : 'AuthorController'
            })
 
.otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
    $scope.message = 'Hello from HomeController';
    });
     
    app.controller('BookController', function($scope) {
    $scope.message = 'Hello from BookController';
    });
     
    app.controller('ContactController', function($scope) {
    $scope.message = 'Hello from ContactController';
    });

    app.controller('AboutController', function($scope) {
        $scope.message = 'Hello from AboutController';
        });
      
    app.controller('PopularbooksController', function($scope) {
        $scope.message = 'Hello from PopularbooksController';
        });   

        app.controller('AuthorController', function($scope) {
            $scope.message = 'Hello from AuthorController';
            });   