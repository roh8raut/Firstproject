
function deleteTask(){
    var taskList = document.querySelector("#textbox");
    var checkBox = document.querySelectorAll(".checkbox");
    var flag = false;
    var count = 0 ;    
    checkBox.forEach(function(item, index){
        if(item.checked){
            flag = true;
            i = index;
            count++;
        }   
    })
    if(flag == true && count == 1){
        var ul = document.querySelector("#taskList")
        var itemList = document.querySelectorAll(".itemList")
        ul.removeChild(itemList[i]);
        var htmld = document.querySelector('.container').innerHTML
        localStorage.setItem('content',(htmld))   
    }else{
        count = 0;
        alert("Select a task first");
    }
}

