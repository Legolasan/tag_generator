'use strict';

$('body').on('click', 'a[target="_blank"]', function(e){
    e.preventDefault();
    chrome.tabs.create({url: $(this).prop('href'), active: false});
    return false;
});