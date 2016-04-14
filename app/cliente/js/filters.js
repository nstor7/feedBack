(function () {

  angular.module('feedback.filters', [])
    .filter('normalize', function () {
      return function (input) {
          if (!input) return "";

          input = input
                  .replace('´');
          return input.toLowerCase();
      };
    })
})();