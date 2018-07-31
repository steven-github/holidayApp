'use strict';

/**
 * @ngdoc function
 * @name holidayAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the holidayAppApp
 */
angular.module('holidayAppApp')
    .controller('MainCtrl', ['$scope', 'getHolidaysService', '$timeout', function ($scope, getHolidaysService, $timeout) {
        $scope.data = {
            date: '01/01/2008',
            days: 10,
            country: 'US'
        };

        $scope.loading = false;
        $scope.loaded = false;
        $scope.error = false;

        $scope.submit = function () {
            
            $scope.loading = true;
            $scope.loaded = false;
            $scope.error = false;

            var momentjs = moment($scope.data.date, "MM/DD/YYYY");
            $scope.data.year = momentjs.year();

            var date = new Date(momentjs.year(), momentjs.month(), momentjs.date());
            var formattedDate = moment(date).add($scope.data.days, 'days').format("MM/DD/YYYY");

            $scope.data.additional = formattedDate;

            $scope.data.month = momentjs.month() + 1;
            $scope.data.day = momentjs.date();

            getHolidaysService.getHolidays($scope.data).then(function (data) {
                try {
                    if (data && data.status === 200) {
                        $scope.data.holidays = data.data.holidays;
                        $timeout(function () {
                            $scope.loading = false;
                            $scope.loaded = true;
                        }, 1500);
                    } else {
                        $timeout(function () {
                            $scope.loading = false;
                            $scope.error = true;
                        }, 1500);

                    }

                } catch (e) {
                    $timeout(function () {
                        $scope.loading = false;
                        $scope.loaded = false;
                        $scope.error = true;
                    }, 1500);
                }
            });
        };
    }]);