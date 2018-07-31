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

        //var apiURL = "http://holidayapi.com/v1/holidays";
        var apiURL = 'https://holidayapi.com/v1/holidays?key=12ed68aa-eebb-4c0b-a37b-6d3202de35ef';

        return {

            getHolidays: function(data) {
                var defer = $q.defer();

                // $http({
                //     method: 'GET',
                //     url: 'https://holidayapi.com/v1/holidays?key=12ed68aa-eebb-4c0b-a37b-6d3202de35ef&country=US&year=2008&month=1',
                //     params: {
                //         country: data.country,
                //         year: data.year,
                //         month: data.month,
                //         public: false
                //     }
                //  }).then(function (response){
                //      console.log('response', response);
                //      defer.resolve(response);
                //  },function (error){
                //      console.log('error', error);
                //      defer.reject(error);
                //  });

                $http({
                    method: 'GET',
                    url: apiURL,
                    params: {
                        country: data.country,
                        year: data.year,
                        //month: data.month,
                        //day: data.day,
                        //previous: true
                    }
                }).
                then(function(response) {
                    //console.log('response', response);
                    defer.resolve(response);
                }, function(error) {
                    defer.reject(error);
                });

                return defer.promise;
            }

        };
    }]);