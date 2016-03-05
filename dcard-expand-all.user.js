// ==UserScript==
// @name         Dcard Expand All Comments
// @version      0.1
// @description  Expand all comments on Dcard
// @author       White Hat & Who
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @match        https://www.dcard.tw/*
// @downloadURL  
// @updateURL    
// @grant        None
// ==/UserScript==

function expandAllComments() {
    var comments = document.getElementsByClassName("count")[1].innerText; /* 共 ... 則回應 */
    var count = Math.ceil(comments.split(' ')[1] / 50 - 2); /* 展開幾次 */
    for (var i = 0; i < count; i++)
        document.getElementById("expandBtn").click();
}

var expandAllBtn = document.createElement('button');
expandAllBtn.setAttribute("class", "btn btn-default");
expandAllBtn.textContent = "展開留言";
expandAllBtn.addEventListener("click", expandAllComments, false);

waitForKeyElements ('#expandBtn', addExpandAllButton);

function addExpandAllButton(jNode){
    $('.float-ops:first').prepend(expandAllBtn);
}
