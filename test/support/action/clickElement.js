

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   element Element selector
 */
module.exports = (action, type, element) => {
    /**
     * Element to perform the action on
     * @type {String}
     */
    const elem = (type === 'link') ? `=${element}` : element;

    /**
     * The method to call on the browser object
     * @type {String}
     */

    console.log("11111" + action)
    console.log("22222" + elem)

    const method = (action === 'click') ? 'click' : 'doubleClick';

    console.log("33333" + method)
    const me = $(elem)
    me.doubleClick();
    debugger
    //browser.doubleClick(elem);

};
