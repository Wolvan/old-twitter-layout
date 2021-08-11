var s = document.createElement('script');
s.src = browser.runtime.getURL('scripts/follow-button-fix.js');
s.onload = function () {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);