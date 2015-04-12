/**
 * @class controllers.profiles
 *
 *
 *
 */
var log = require('utils/log');


_.extend($, {
    /**
     * @constructor
     * @method construct
     * @param {Object} config Controller configuration
     */
    construct: function(config) {

        var navWindow = Ti.UI.iOS.createNavigationWindow({
            includeOpaqueBars: true,
            autoAdjustScrollViewInsets: false,
            fullscreen: true,
            window: $.getView()
        });

        navWindow.open();

    },

    /**
     * @method destruct
     * function executed when closing window
     */
    destruct: function() {
    }
});
