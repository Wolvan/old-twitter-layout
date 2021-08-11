var s = document.createElement('script');
s.src = browser.runtime.getURL('scripts/font-fix.js');
s.onload = function () {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);