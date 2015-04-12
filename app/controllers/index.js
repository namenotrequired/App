/**
 * Controller for index
 *
 * @class Controllers.index
 */

/**
 * Initializes the controller
 */
_.extend($, {
    /**
     * @constructor
     * @method construct
     * @param {Object} config Controller configuration
     */
    construct: function(config) {
        Alloy.Globals.drawer = $.drawer;
        Alloy.Globals.navigationWindow = $.navigationWindow;
        $.drawer.open();
    },

    /**
     * @method destruct
     * function executed when closing window
     */
    destruct: function() {
    }
});
