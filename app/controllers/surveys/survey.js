/**
 * Controller for surveys survey
 *
 * @class Controllers.surveys.survey
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
        $.getView().open();
    },

    /**
     * @method destruct
     * function executed when closing window
     */
    destruct: function() {
    }
});

