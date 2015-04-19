/**
 * Controller for surveys cloud cover
 *
 * @class Controllers.surveys.cloudCover
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
        $.grid.setData(require('data/cloudCover'));
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
    log.info('[windspeed] Click on grid', evt);
    Alloy.createController('surveys/survey');
}
