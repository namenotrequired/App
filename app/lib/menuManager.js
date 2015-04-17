/**
 * lib.menuManager
 */
var Alloy = require('alloy'),
    _ = Alloy._;

// Libaries
var log = require('utils/log');
var statusbar = require("com.apaladini.statusbar");

// Intenals
var menuState = 'closed';

var menuManager = module.exports = {
    updateStatus: function () {
        if (menuState === 'closed') {
            statusbar.hide();
            menuState = 'open';
            return menuState;
        }
        statusbar.show();
        menuState = 'closed';
        return menuState;
    },
    getStatus: function () {
        return menuState;
    },
    setStatus: function (status) {
        menuState = status;
        if (status === 'closed') {
            statusbar.show();
            return;
        }

        statusbar.hide();
    }
};
