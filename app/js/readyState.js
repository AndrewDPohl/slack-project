// Make sure DOM is loaded 
function _readyState(func) {
    if (window.addEventListener) {
        window.addEventListener("load", func, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", func);
    };
};