(function () {
  strict mode enforces stricter parsing and error handling on the code at runtime.
'use strict';

var x =

angular.module('NameCalculator', [])
.controller('NameCalculatorController' , NameCalculatorController);

$scope.name = "RRR" ;

// NameCalculatorController.$inject = ['$scope', '$filter' ];
function NameCalculatorController ($scope, $filter) {

    $scope.name = "RRR" ;

$scope.upper = function () {
  var upCase = $filter('uppercase');
 $scope.name = upCase($scope.name);

};


}

// function AnnotateMe (name, job, blah){
//
//  return "Blah!"
// }
})();
