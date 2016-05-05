(function(){
    var app = angular.module('feedback', [
        'ngRoute',
        'feedback.controllers',
        'feedback.services',
        'feedback.filters'
    ])
    
    app.config(['$routeProvider', function($routeProvider){
        
        $routeProvider
        .when('/', {
            templateUrl: '/vistas/home.html',
            controller: 'articulosController'
        })
        .when('/:clasificacion', {
            templateUrl: '/vistas/seccion.html',
            controller: 'articulosController'
        })
        .when('/articulo/:id', {
        templateUrl: '/vistas/articulo.html',
        controller: 'articuloController'
        })
        .otherwise({
            redirectTo: '/'
        })
    }])
})()