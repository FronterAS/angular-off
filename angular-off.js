(function (module, undefined) {
    'use strict';

    /* Config */
    module.config(['$provide', function ($provide) {

        var self = this;

        function ngOff(eventName, fn) {
            if (self.$$listeners) {
                if (arguments.length > 1) {
                    var namedListeners = self.$$listeners[eventName];
                    if (namedListeners) {
                        namedListeners.splice(namedListeners.indexOf(fn), 1);
                    }
                } else {
                    self.$$listeners[eventName] = null;
                } // end args > 1
            } // end if $$listeners
        }

        $provide.decorator('$rootScope', ['$delegate', function($delegate) {
            Object.defineProperty($delegate.constructor.prototype, '$off', {
                value: ngOff,
                enumerable: false
            });

            return $delegate;
        }]);
    }]);

}(angular.module('angular-off', []), angular));
