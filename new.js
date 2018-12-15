window.onload = function(){

    if(localStorage.getItem('content') != null){
    var x = localStorage.getItem('content')
    document.querySelector(".container").innerHTML = x;
    }else
        var container = document.querySelector('.container')
        document.body.appendChild = container;

}