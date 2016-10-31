const s = document.createElement('script');
s.src = chrome.extension.getURL('scripts/main.js');

(document.head || document.documentElement).prepend(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};
