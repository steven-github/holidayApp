'use strict';

/**
 * @ngdoc directive
 * @name holidayAppApp.directive:main
 * @description
 * # main
 */
angular.module('holidayAppApp')
    .directive('loadCalendar', [function() {
        return {
            restrict: 'A',
            link: function(scope, iElement, iAttrs) {
                $(iElement).daterangepicker({
                    startDate: '01/01/2008',
                    endDate: '01/15/2008',
                    maxDate: '01/15/2008',
                    parentEl: ".daterange",
                    "singleDatePicker": true,
                    "locale": {
                        "firstDay": 6
                    }
                }, function(start, end, label) {
                    console.log('predefined range: ', label);
                }).trigger('click');
            }
        };
    }]);