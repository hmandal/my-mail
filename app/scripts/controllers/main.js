'use strict';
/**
 * @ngdoc function
 * @name myMailApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myMailApp
 */
angular.module('myMailApp').controller('MainCtrl', ['$scope', function($scope) {
    $scope.emails = [{
        from: 'John',
        subject: 'I love angular',
        date: 'Jan 1',
        body: 'hello world!'
    }, {
        from: 'Jack',
        subject: 'Angular and I are just friends',
        date: 'Feb 15',
        body: 'just kidding'
    }, {
        from: 'Ember',
        subject: 'I hate you Angular!',
        date: 'Dec 8',
        body: 'wassup dude'
    }];

    $scope.showPopup = function(email) {
        $scope.selectedEmail = email;
        $('#emailModal').modal('show'); 
    };
    $scope.showComposePopup = function() {
        $('#composeModal').modal('show'); 
    };
}]);