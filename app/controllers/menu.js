/**
 * Controller for the menu
 *
 * @class Controllers.menu
 * @uses utils.log
 */
var log = require('utils/log');

// Internal variables
var activeItem;

_.extend($, {
    /**
     * @constructor
     * @method construct
     * @param {Object} config Controller configuration
     */
    construct: function(config) {
        // Set surveys to active by default
        $.menuItemSurveys.backgroundColor = Alloy.CFG.design.colors.defaultBlue;
        activeItem = 'menuItemSurveys';
    },

    /**
     * @method destruct
     * function executed when closing window
     */
    destruct: function() {
    }
});

/**
 * @method onClickSurveys
 * Handle `click` on surveys menu item, open surveys (if not active), close menu
 * @param  {Object} evt Event object
 */
function onClickSurveys (evt) {
    if (activeItem !== 'menuItemSurveys') {
        var surveys = Alloy.createController('surveys').getView();
        Alloy.Globals.navigationWindow.openWindow(surveys, {animated: false});
        Alloy.Globals.drawer.toggleRightWindow();
        activateItem('menuItemSurveys');
    }
}

/**
 * @method onClickProfiles
 * Handle `click` on profiles menu item, open profiles (if not active), close menu
 * @param  {Object} evt Event object
 */
function onClickProfiles (evt) {
    if (activeItem !== 'menuItemProfiles') {
        var profiles = Alloy.createController('profiles').getView();
        Alloy.Globals.navigationWindow.openWindow(profiles, {animated: false});
        Alloy.Globals.drawer.toggleRightWindow();
        activateItem('menuItemProfiles');
    }
}

/**
 * @method onClickGuide
 * Handle `click` on guide menu item, open guide (if not active), close menu
 * @param  {Object} evt Event object
 */
function onClickGuide (evt) {
    if (activeItem !== 'menuItemGuide') {
        var guide = Alloy.createController('guide').getView();
        Alloy.Globals.navigationWindow.openWindow(guide, {animated: false});
        Alloy.Globals.drawer.toggleRightWindow();
        activateItem('menuItemGuide');
    }
}

/**
 * @method onClickSettings
 * Handle `click` on settings menu item, open settings (if not active), close menu
 * @param  {Object} evt Event object
 */
function onClickSettings (evt) {
    if (activeItem !== 'menuItemSettings') {
        var settings = Alloy.createController('settings').getView();
        Alloy.Globals.navigationWindow.openWindow(settings, {animated: false});
        Alloy.Globals.drawer.toggleRightWindow();
        activateItem('menuItemSettings');
    }
}

/**
 * @method onClickMore
 * Handle `click` on more menu item, open more (if not active), close menu
 * @param  {Object} evt Event object
 */
function onClickMore (evt) {
    if (activeItem !== 'menuItemMore') {
        var more = Alloy.createController('more').getView();
        Alloy.Globals.navigationWindow.openWindow(more, {animated: false});
        Alloy.Globals.drawer.toggleRightWindow();
        activateItem('menuItemMore');
    }
}

/**
 * @method activeItem
 * Return previous active item to normal, activate new menu item
 * @param  {String} menuItem Item to activate
 */
function activateItem (menuItem) {
    $[activeItem].backgroundColor = 'transparent';
    $[menuItem].backgroundColor = Alloy.CFG.design.colors.defaultBlue;
    activeItem = menuItem;
}

// Exports
exports.activateItem = activateItem;
