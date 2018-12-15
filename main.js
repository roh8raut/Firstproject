
function add(){
    var textbox = document.querySelector("#textbox");
    textbox.value = '';
    textbox.style.display = "inline"
    textbox.focus();
    
}

function addTask(e){
    if(e.keyCode == 13){
        var ul = document.querySelector("#taskList")
        var textBox = document.querySelector("#textbox");
        var li = "<li class=\"itemList\"><input type=\"checkbox\" class=\"checkbox\"><p class=\"content\" contenteditable=\"false\" onKeyPress=saveTask(event)>"+ textBox.value+"</p></li>"
        ul.innerHTML += li;
        textBox.style.display = "none";
        var htmld = document.querySelector('.container').innerHTML
        localStorage.setItem('content',(htmld))
    }
}
