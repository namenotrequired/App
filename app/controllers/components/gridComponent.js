var args = arguments[0] || {};
var dataObject;

if (args.gridComponentData) {
    console.log('Generating component');
    dataObject = args.gridComponentData;

    $.icon.image = dataObject.icon;
    $.value.text = dataObject.valueLabel;
    $.caption.text = dataObject.captionLabel;
}

/**
 * [onClickGrid description]
 * @param  {[type]} evt [description]
 * @return {[type]}     [description]
 */
function onClickGrid (evt) {
    $.trigger('click', dataObject);
}
