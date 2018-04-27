/*----carousel code-----*/
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

/*----Navigation scroll bar-----*/
var marginY =0;
var destination =0;
var speed =13;
var scroller=null;

function initScroll(elementId){
destination =document.getElementById(elementId).offsetTop;

scroller = setTimeout(function(){
initScroll(elementId);
}, 1);

marginY =marginY + speed;

if(marginY >=destination){
 clearTimeout(scroller)
}
window.scroll(0, marginY);
}


