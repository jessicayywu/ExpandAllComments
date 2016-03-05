/*javascript:*/
var comments = document.getElementsByClassName("count")[1].innerText; /* 共 ... 則回應 */
var count = Math.floor(comments.ceil(' ')[1] / 50 - 2); /* 展開幾次 */
for(var i = 0; i < count; i++)
  document.getElementById("expandBtn").click();
