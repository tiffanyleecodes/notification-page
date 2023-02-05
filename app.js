const mark_read = document.querySelector(".mark")
const notification_qty = document.querySelector(".qty")
const dot = document.querySelectorAll(".dot")
const notification = document.querySelectorAll(".notification")



mark_read.addEventListener("click", function(event){
    notification_qty.style.display = "none" ;

    for ( let i = 0 ; i < dot.length; i++ ){
    dot[i].style.display = "none";
    notification[i].style.backgroundColor = "#fff"; };

})