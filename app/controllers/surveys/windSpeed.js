/**
 * Controller for surveys windSpeed
 *
 * @class Controllers.surveys.windSpeed
 * @uses utils.log
 */
var log = require('utils/log');

// STATE PRESURVEY or POSTSURVEY
var STATE = 'PRESURVEY';

var windSpeedData = [
    {
        id: 0,
        icon: '/images/icons/windSpeed/windSpeed0.png',
        valueLabel: '0 - 2',
        captionLabel: 'Knots'
    },
];

_.extend($, {
    /**
     * @constructor
     * @method construct
     * @param {Object} config Controller configuration
     */
    construct: function(config) {
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
