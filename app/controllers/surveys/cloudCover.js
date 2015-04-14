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
        $.getView().open();
    },

    /**
     * @method destruct
     * function executed when closing window
     */
    destruct: function() {
    }
});
