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
        Alloy.Globals.menu = $.menu;
        $.drawer.open();

        $.drawer.addEventListener('windowDidOpen', function (evt) {
            Ti.App.fireEvent('menuDidOpen');
        });

        $.drawer.addEventListener('windowDidClose', function (evt) {
            Ti.App.fireEvent('menuDidClose');
        });
    },

    /**
     * @method destruct
     * function executed when closing window
     */
    destruct: function() {
    }
});
