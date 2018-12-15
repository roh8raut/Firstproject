var count = 0;
var i = 0;
function editTask(){
    var checkBox = document.querySelectorAll(".checkbox")
    var content = document.querySelectorAll(".content");
    var flag = false;
    checkBox.forEach(function(item, index){
        if(item.checked){
            flag = true;
            i = index;
            count++;
        } 
    })
    if(flag == true && count == 1){
        content[i].contentEditable = true;
        content[i].focus();
        checkBox[i].checked = false;
       
        
    }else{
        count = 0;
        alert("select tick a  single task")
    }
}

function saveTask(e){
    if(e.keyCode == 13){
        var content = document.querySelectorAll(".content");
        content[i].contentEditable = false;
        var htmld = document.querySelector('.container').innerHTML
        localStorage.setItem('content',(htmld))
    }   
        
}

