var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var header = this.nextElementSibling;
        if (header.style.maxHeight){
            header.style.maxHeight = null;
        } else {
            header.style.maxHeight = header.scrollHeight + "px";
        }
    });
}