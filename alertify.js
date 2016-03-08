/*javascript: */
function deleteAlertify() {
    newSection.className = "alertify alertify-hide alertify-hidden alertify-isHidden";
    setTimeout('document.getElementById("alertify").remove();', 500);
}

if (document.getElementById("alertify") != null) {
    deleteAlertify();
}

var newSection = document.createElement("section");
newSection.id = "alertify";
newSection.className = "alertify alertify-hide alertify-hidden alertify-isHidden";
setTimeout('newSection.className = "alertify alertify-confirm";', 500);

var innerDiv = document.createElement("div");
innerDiv.className = "alertify-dialog";

var innerArticle = document.createElement("article");
innerArticle.className = "alertify-inner";

var innerP = document.createElement("p");
innerP.className = "alertify-message";
innerP.textContent = "...";

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
innerOKBtn.addEventListener('click', deleteAlertify);

innerNav.appendChild(innerCancelBtn);
innerNav.appendChild(innerOKBtn);
innerArticle.appendChild(innerP);
innerArticle.appendChild(innerNav);
innerDiv.appendChild(innerArticle);
newSection.appendChild(innerDiv);
document.getElementsByTagName('body')[0].appendChild(newSection);

/* The result will be like:
<section id="alertify" class="alertify alertify-confirm">
	<div class="alertify-dialog">
		<article class="alertify-inner">
			<p class="alertify-message">...</p>
			<nav class="alertify-buttons">
				<button class="alertify-button alertify-button-cancel" id="alertify-cancel">Cancel</button>
				<button class="alertify-button alertify-button-ok" id="alertify-ok">OK</button>
			</nav>
		</article>
	</div>
</section>
*/
