/**
 * Controller for profiles newProfile
 *
 * @class Controllers.profiles.newProfile
 * @uses utils.log
 */
var log = require('utils/log');

var navWindow;
var STATE = 'PROFILE';

_.extend($, {
    /**
     * @constructor
     * @method construct
     * @param {Object} config Controller configuration
     */
    construct: function(config) {
        if (config.flow === 'survey') {
            STATE = 'SURVEY';
            navWindow = Ti.UI.iOS.createNavigationWindow({
                includeOpaqueBars: true,
                autoAdjustScrollViewInsets: false,
                fullscreen: true,
                window: $.getView()
            });

            navWindow.open();
            return;
        }

        $.getView().open({modal:true});
    },

    /**
     * @method destruct
     * function executed when closing window
     */
    destruct: function() {
    }
});

/**
 * @method closeWindow
 * Close current window
 */
function closeWindow (evt) {
    if (STATE === 'SURVEY') {
        navWindow.close({animated: true});
    }

    $.getView().close();
}

/**
 * [onChangeUpdateHeight description]
 * @param  {[type]} evt [description]
 * @return {[type]}     [description]
 */
function onChangeUpdateHeight (evt) {
    var height = Math.floor(evt.value);
    $.height.text = height + ' meter';
}

function saveProfile (evt) {

}
