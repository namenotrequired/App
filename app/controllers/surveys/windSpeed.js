/**
 * Controller for surveys windSpeed
 *
 * @class Controllers.surveys.windSpeed
 * @uses utils.log
 */
var log = require('utils/log');

// STATE PRESURVEY or POSTSURVEY
var STATE = 'PRESURVEY';

_.extend($, {
    /**
     * @constructor
     * @method construct
     * @param {Object} config Controller configuration
     */
    construct: function(config) {
        $.grid.setData(require('data/windSpeed'));
        require('windowManager').openWinWithBack($.getView());
    },

    /**
     * @method destruct
     * function executed when closing window
     */
    destruct: function() {
    }
});

function onClickBackButton () {
    $.getView().close({animated: true});
}

function onClickGrid (evt) {
    log.info('[windSpeed] Click on grid', evt);
    Alloy.createController('surveys/cloudCover');
}
