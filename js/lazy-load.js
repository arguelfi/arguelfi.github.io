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

    var bigSrc = function (selector) {
        if (doc.styleSheets) {
            var cssRules = doc.styleSheets[1].cssRules, fullImg;
            for (var i = 0; i < cssRules.length; i++) {
                var rule = cssRules[i];
                if (rule.selectorText == selector) {
                    fullImg = rule;
                    break;
                }
            }
            if (fullImg) {
                return fullImg.style.backgroundImage.slice(4, -1).replace(/"/g, "");
            }
        }
    };

    // 1: load small image and show it
    var small = doc.querySelector('.img-small'), parallax = doc.querySelector('.parallax'),
        placeholder = doc.querySelector('.placeholder');
    var img = new Image();
    img.onload = function () {
        placeholder.appendChild(img);
        placeholder.classList.add('img-small', 'loaded');
    };
    img.src = bigSrc(".img-small");

    // 2: load large image
    var imgLarge = new Image();
    imgLarge.onload = function () {
        img.src = imgLarge.src;
        placeholder.classList.remove('img-small');
    };
    imgLarge.src = bigSrc('.img-full');
    // var placeholder = doc.querySelector('.placeholder');
    //
    // // 1: load small image and show it
    // var img = new Image();
    // img.onload = function () {
    //     placeholder.classList.add('loaded');
    // };
    // img.src = getImgSrc(placeholder);
    //
    // if (bigSrc) {
    //     // 2: load large image
    //     var imgLarge = new Image();
    //     imgLarge.onload = function () {
    //         placeholder.classList.add('placeholder-full');
    //         placeholder.classList.remove('img-small');
    //     };
    //     imgLarge.src = bigSrc;
    // }
    $(document).ready(function () {
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();
    });
};