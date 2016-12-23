function getImgSrc(img) {
    var style = img.currentStyle || window.getComputedStyle(img, false);
    return style.backgroundImage.slice(4, -1).replace(/"/g, "");
}
// Based on: https://css-tricks.com/the-blur-up-technique-for-loading-background-images/
window.onload = function () {
    var win, doc;
// Quit early if older browser (e.g. IE 8).
    if (!('addEventListener' in window)) {
        return;
    }
    win = window;
    doc = win.document;

    var bigSrc = (function () {
        if (doc.styleSheets) {
            var cssRules = doc.styleSheets[1].cssRules, fullImg;
            for (var i = 0; i < cssRules.length; i++) {
                var rule = cssRules[i];
                if (rule.selectorText == ".placeholder-full") {
                    fullImg = rule;
                    break;
                }
            }
            if (fullImg) {
                return fullImg.style.backgroundImage.slice(4, -1).replace(/"/g, "");
            }
        }
    }());

//        var placeholder = document.querySelector('.placeholder'),
//            small = placeholder.querySelector('.img-small');
    var placeholder = doc.querySelector('.placeholder');

    // 1: load small image and show it
    var img = new Image();
    img.onload = function () {
        placeholder.classList.add('loaded');
    };
    img.src = getImgSrc(placeholder);

    if (bigSrc) {
        // 2: load large image
        var imgLarge = new Image();
        imgLarge.onload = function () {
            placeholder.classList.add('placeholder-full');
            placeholder.classList.remove('img-small');
        };
        imgLarge.src = bigSrc;
    }
};