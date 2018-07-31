'use strict';

/**
 * @ngdoc directive
 * @name holidayAppApp.directive:main
 * @description
 * # main
 */
angular.module('holidayAppApp')
    .directive('loadCalendar', [function () {
        return {
            restrict: 'A',
            link: function (scope, iElement, iAttrs) {
                $(iElement).daterangepicker({
                    startDate: scope.data.date,
                    endDate: scope.data.additional,
                    minDate: scope.data.date,
                    maxDate: scope.data.additional,
                    parentEl: ".daterange",
                    //"singleDatePicker": true,
                    //opens: 'left',
                    locale: {
                        //firstDay: 6
                    },
                    dateLimit: {
                        //days: 30
                    },
                    holidays: scope.data.holidays
                }, function (start, end, label) {
                    console.log('predefined range: ', label);
                }).trigger('click');
                $('[data-toggle="tooltip"]').tooltip();
            }
        };
    }])
    .directive('stopPropagation', [function () {
        return {
            restrict: 'A',
            link: function (scope, iElement, iAttrs) {
                iElement.find('.daterangepicker').on("click", function (e) {
                    //e.stopPropagation();
                    //e.preventDefault();
                });
            }
        };
    }]);