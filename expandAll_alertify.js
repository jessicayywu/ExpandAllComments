/* javascript: */
var comments = document.getElementsByClassName("count")[1].innerText;　// "共 ... 則回應"
var count = Math.ceil(comments.split(' ')[1] / 50 - 2); // number of times to expand

function deleteAlertify() {
  document.getElementById("alertify").remove();
}

function expandAll() {
  for(var i = 0; i < count; i++)
    document.getElementById("expandBtn").click();
}

if (count < 10) { // if the number of comments is less than 500
  expandAll();
}
else { // display the alertify dialog
  // delete the original alertify dialog
  if (document.getElementById("alertify") != null) {
    deleteAlertify();
  }

  // session
  var newSection = document.createElement("section");
  newSection.id = "alertify";
  newSection.className = "alertify alertify-confirm";

  // div
  var innerDiv = document.createElement("div");
  innerDiv.className = "alertify-dialog";

  // article
  var innerArticle = document.createElement("article");
  innerArticle.className = "alertify-inner";

  // p, alert message
  var innerP = document.createElement("p");
  innerP.className = "alertify-message";
	innerP.innerText = "...";

  // nav
  var innerNav = document.createElement("nav");
  innerNav.className = "alertify-buttons";

  // cancel button
  var innerCancelBtn = document.createElement("button");
  innerCancelBtn.className = "alertify-button alertify-button-cancel";
	innerCancelBtn.id = "alertify-cancel";
  innerCancelBtn.innerText = "Cancel";
  innerCancelBtn.addEventListener('click', deleteAlertify);

  // ok button
  var innerOKBtn = document.createElement("button");
  innerOKBtn.className = "alertify-button alertify-button-ok";
  innerOKBtn.id = "alertify-ok";
  innerOKBtn.innerText = "OK";
  innerOKBtn.addEventListener('click', deleteAlertify);
  innerOKBtn.addEventListener('click', expandAll); // expand the comments

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
  }
