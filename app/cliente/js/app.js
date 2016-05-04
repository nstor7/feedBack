(function(){
    var app = angular.module('feedback', [
        'ngRoute',
        'feedback.controllers',
        'feedback.services',
        'feedback.filters'
    ])
    
    app.config(['$routeProvider', function($routeProvider){
        
        $routeProvider
        .when('/:clasificacion', {
            templateUrl: '/vistas/home.html',
            controller: 'articulosController'
        })
        .when('/articulo/:id', {
        templateUrl: '/vistas/articulo.html',
        controller: 'articuloController'
        })
        .when('/:seccionId', {
        templateUrl: '/vistas/seccion.html',
        controller: 'articulosController'
        })
        .otherwise({
            redirectTo: '/portada'
        })
    }])
})()