fromDOM = $('h1.name').text();

chrome.runtime.sendMessage({contentscript: "from: contentscript.js", title: fromDOM}, function(b) {
    console.log('on: contentscript.js === ' + b.background);
});