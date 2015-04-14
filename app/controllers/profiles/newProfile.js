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
            require('windowManager').openWinWithBack($.getView());
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
        require('windowManager').closeWin({animated: true});
    }

    $.getView().close();
}

/**
 * @method onChangeUpdateHeight
 * Handle `change` of slider, update label to display height
 * @param  {Object} evt
 */
function onChangeUpdateHeight (evt) {
    var height = Math.floor(evt.value);
    $.height.text = height + ' meter';
}

/**
 * @method saveProfile
 * Handle `click` on save
 * @param  {Object} evt
 */
function saveProfile (evt) {
    if (STATE === 'SURVEY') {
        //@todo: create a new survey model
        //@todo: Do some checking on the data!
        Alloy.createController('surveys/windSpeed', { state: 'PRESURVEY'} );
    }
}
