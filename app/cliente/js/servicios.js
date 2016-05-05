(function () {

  angular.module('feedback.services', [])

    .factory('articuloService', ['$http', '$q','$filter', function ($http, $q, $filter) {
        var normalize = $filter('normalize');
        
      function all() {
        var deferred = $q.defer();

        $http.get('/articulos.json')
          .success(function (data) {
            deferred.resolve(data);
          });

        return deferred.promise;
      }
        function byId(id) {
                var deferred = $q.defer();
                
                all().then(function (data){
                    var results = data.filter(function (articulo) {
                        return articulo.id === id;
                });

                    if (results.length > 0) {
                        deferred.resolve(results[0]);
                    } else {
                        deferred.reject();
                    };

                })
                return deferred.promise;
            };
        
        function byClasificacion(clasificacion){
            deferred = $q.defer()
            
            all().then(function (data){
                var results = data.filter(function(articulos){
                    return articulos.clasificacion === clasificacion
                })
                deferred.resolve(results)
            })
            return deferred.promise
        }

      return {
        all: all,
        byId: byId,
        byClasificacion: byClasificacion,
      };

    }]);

})();
