const hamburger = document.getElementById("ham");
const x = document.getElementById("navElements");

hamburger.addEventListener("click",function(){
    if (x.style.right === "0px") {
        x.style.right = "-100%";
        hamburger.classList.toggle("close")
       
    } else {
        x.style.right = "0px";
    }
});

x.addEventListener("click",function(){
    x.style.right = "-100%";
})
