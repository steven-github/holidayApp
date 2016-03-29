'use strict';

/**
 * @ngdoc service
 * @name holidayAppApp.main
 * @description
 * # main
 * Factory in the holidayAppApp.
 */
angular.module('holidayAppApp')
    .factory('getHolidaysService', ['$http', '$q', function($http, $q) {

        var apiURL = "http://holidayapi.com/v1/holidays";

        return {

            getHolidays: function(data) {
                var defer = $q.defer();

                $http({
                    method: 'GET',
                    url: apiURL,
                    params: {
                        country: data.country,
                        year: data.year,
                        month: data.month
                    }
                }).
                success(function(data, status, headers, config) {
                    defer.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    defer.reject(data);
                });

                return defer.promise;
            }

        };
    }]);