// Load the page and add eventListener on load
function _readyState(func) {
    if (window.addEventListener) {
        window.addEventListener("load", func, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", func);
    };
};