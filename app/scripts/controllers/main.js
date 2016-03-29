'use strict';

/**
 * @ngdoc function
 * @name holidayAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the holidayAppApp
 */
angular.module('holidayAppApp')
    .controller('MainCtrl', ['$scope', 'getHolidaysService', '$timeout', function($scope, getHolidaysService, $timeout) {
        $scope.data = {
            date: '04/01/2008',
            days: 10,
            country: 'US'
        };
        $scope.loading = false;
        $scope.loaded = false;
        $scope.submit = function() {
            var momentjs = moment($scope.data.date, "MM/DD/YYYY");
            $scope.data.month = momentjs.month() + 1;
            $scope.data.day = momentjs.day();
            $scope.data.year = momentjs.year();
            getHolidaysService.getHolidays($scope.data).then(function(data) {
                $scope.loading = true;
                try {
                    if (data && data.status == 200) {
                        console.log('data', data);
                        $scope.holidays = data;
                        $timeout(function() {
                            $scope.loading = false;
                            $scope.loaded = true;
                        }, 1500);
                    }

                } catch (e) {
                    $timeout(function() {
                        $scope.loading = false;
                        $scope.loaded = true;
                    }, 1500);
                }
            });
        };
    }]);