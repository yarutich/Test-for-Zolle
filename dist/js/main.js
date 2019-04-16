var acc = document.getElementsByClassName('accordion__btn'),
    i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

var hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", openMobileNav);

function openMobileNav() {
    var x = document.getElementById("navMobile");
    if (x.style.display === "") {
        x.style.display = "block";
    } else if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};