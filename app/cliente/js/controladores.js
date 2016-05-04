(function () {
    angular.module('feedback.controllers', [])
        .controller('articulosController', ['$scope', '$routeParams', 'articuloService', function($scope, $routeParams, articuloService){       var clasificacion = $routeParams.clasificacion
      
        if(clasificacion){
            articuloService.byClasificacion(clasificacion)
            .then(function(data){
                $scope.articulos = data
            })
        } else if(seccion){
            articuloService.bySeccionId(seccionId)
                .then(function(data){
                $scope.seccionId = data;
            });
       } else{
            articuloService.all()
                .then(function(data){
                $scope.articulos = data
            })
        }
                                                                                                                                        }])
    .controller('articuloController', ['$scope', '$routeParams', 'articuloService', function($scope, $routeParams, articuloService){
            var id = $routeParams.id
            
            $scope.articulo = {}
            
            articuloService.byId(id)
                .then(function(data){
                $scope.articulo = data
            })
        }
    ])
})()