function myFn(){
    var k = document.getElementById('nav1');
    var m = document.getElementById('nav2');
    if(k.style.display != 'none'){
        document.getElementById('nav2').style.display = 'block'
    }
    else{
        document.getElementById('nav2').style.display = 'none'
    }
}
function myFn2(){
    document.getElementById('nav2').style.display = 'none'
}