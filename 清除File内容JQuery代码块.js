//清除File内容JQuery代码块
var file = $("#MyFile") ;
file.after(file.clone().val(""));      
file.remove();