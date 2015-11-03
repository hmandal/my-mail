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
        to: 'Jack',
        subject: 'I love angular',
        date: 'Jan 1',
        body: 'hello world!'
    }, {
        from: 'Jack',
        to: 'Jill',
        subject: 'Angular and I are just friends',
        date: 'Feb 15',
        body: 'just kidding'
    }, {
        from: 'Ember',
        to: 'Humpty',
        subject: 'I hate you Angular!',
        date: 'Dec 8',
        body: 'wassup dude'
    }];
    $scope.showPopup = function(email) {
        $scope.selectedEmail = email;
        $('#emailModal').modal('show');
    };
    $scope.showComposePopup = function() {
    	$scope.composeEmail = {};
        $scope.composeEmail.from = "me";
        $('#composeModal').modal('show');
    };
    $scope.composeEmail = {};
    $scope.activeTab = "inbox";
    $scope.sentEmails = [];
    $scope.sendEmail = function() {
        $scope.composeEmail.date = new Date();
        $scope.composeEmail.from = "me";
        $scope.sentEmails.splice(0, 0, $scope.composeEmail);
        $scope.composeEmail = {};
    };
    $scope.forward = function() {};
    $scope.reply = function() {
        $scope.composeEmail = {};
        angular.copy($scope.selectedEmail, $scope.composeEmail);
        $scope.composeEmail.body = "\n-------------------------------\n" + "from: " + $scope.composeEmail.from + "\n" + "sent: " + $scope.composeEmail.date + "\n" + "to: " + $scope.composeEmail.to + "\n" + "subject: " + $scope.composeEmail.subject + "\n" + $scope.composeEmail.body;
        $scope.composeEmail.subject = "RE: " + $scope.composeEmail.subject;
        $scope.composeEmail.to = $scope.composeEmail.from;
        $scope.composeEmail.from = "me";
        $("#emailModal").modal('hide');
        $("#composeModal").modal('show');
    };
}]);