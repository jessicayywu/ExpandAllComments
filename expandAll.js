/*javascript:*/
for(var i = 0; i < 100; i++) {
  setTimeout('document.getElementById("expandBtn").click();', 1000);
}
alert("已全部展開!");

/* 判斷document.getElementById("expandBtn") != null browser會掛掉QQ */
