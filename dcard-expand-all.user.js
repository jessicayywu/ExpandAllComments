// ==UserScript==
// @name         Dcard Expand All Comments
// @version      1.0
// @description  Expand all comments on Dcard
// @author       White Hat & Who
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @match        https://www.dcard.tw/*
// @downloadURL  
// @updateURL    
// @grant        none
// ==/UserScript==

var comments;
var count;

// create expandAll button element
var expandAllBtn = document.createElement('button');
expandAllBtn.setAttribute("class", "btn btn-default");
expandAllBtn.textContent = "展開留言";
expandAllBtn.addEventListener("click", function() {
    comments = document.getElementsByClassName("count")[1].textContent.split(' ')[1]; /* 共 {comments} 則回應 */
    count = Math.round(comments / 50 - 2); /* 展開幾次 */
    if (comments <= 500) {
        expandAllComments();
    } else {
        showAlertify();
    }
}, false);

// create alertify element
var newSection = document.createElement("section");
newSection.id = "expand-alertify";
newSection.className = "alertify alertify-hide alertify-hidden alertify-isHidden";


var innerDiv = document.createElement("div");
innerDiv.className = "alertify-dialog";

var innerArticle = document.createElement("article");
innerArticle.className = "alertify-inner";

var innerP = document.createElement("p");
innerP.className = "alertify-message";
innerP.textContent = "留言超過五百則，您確定要展開嗎？";

var innerNav = document.createElement("nav");
innerNav.className = "alertify-buttons";

var innerCancelBtn = document.createElement("button");
innerCancelBtn.className = "alertify-button alertify-button-cancel";
innerCancelBtn.id = "alertify-cancel";
innerCancelBtn.textContent = "Cancel";
innerCancelBtn.addEventListener('click', deleteAlertify);

var innerOKBtn = document.createElement("button");
innerOKBtn.className = "alertify-button alertify-button-ok";
innerOKBtn.id = "alertify-ok";
innerOKBtn.textContent = "OK";
innerOKBtn.addEventListener('click', function() {
    expandAllComments();
    deleteAlertify();
});

waitForKeyElements('#expandBtn', addExpandAllButton);

function addExpandAllButton(jNode) {
    $('.float-ops:first').prepend(expandAllBtn);
}

function expandAllComments() {
    for (var i = 0; i < count; i++)
        document.getElementById("expandBtn").click();
    $('.float-ops:first button:first').remove()
}

function showAlertify() {
    innerNav.appendChild(innerCancelBtn);
    innerNav.appendChild(innerOKBtn);
    innerArticle.appendChild(innerP);
    innerArticle.appendChild(innerNav);
    innerDiv.appendChild(innerArticle);
    newSection.appendChild(innerDiv);
    document.getElementsByTagName('body')[0].appendChild(newSection);
    setTimeout(function() {
        newSection.className = "alertify alertify-confirm";
    }, 250);
}

function deleteAlertify() {
    newSection.className = "alertify alertify-hide alertify-hidden alertify-isHidden";
    setTimeout(function() {
        document.getElementById("expand-alertify").remove();
    }, 500);
}
