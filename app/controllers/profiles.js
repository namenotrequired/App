/**
 * Controller for Profiles
 *
 * @class Controllers.profiles
 * @uses utils.log
 */
var log = require('utils/log');

_.extend($, {
    /**
     * @constructor
     * @method construct
     * @param {Object} config Controller configuration
     */
    construct: function(config) {

    },

    /**
     * @method destruct
     * function executed when closing window
     */
    destruct: function() {
    }
});

/**
 * @method doClickNewProfile
 * Handle `click` on newProfile button, create profiles.newProfile controller
 * @param  {Object} evt
 */
function doClickNewProfile (evt) {
    // Throttle the button press to prevent multiple clicks
    setNewProfileOpacity(0.4);
    _.delay(_.partial(setNewProfileOpacity, 1), 150);
    Alloy.createController('profiles/newProfile');
}

/**
 * @method setNewProfileOpacity
 * Update the opacity of the newProfile button
 * @param {float) opacity
 */
function setNewProfileOpacity (opacity) {
    $.newProfile.opacity = opacity;
}
