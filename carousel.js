const lead = document.querySelectorAll(".syncscrolllead");
const follow = document.querySelectorAll(".syncscrollfollow");

lead.forEach(l => l.addEventListener('scroll', e => {
    follow.forEach(f => {
        f.scrollLeft = l.scrollLeft * 2;
    });
}));


/*
This could be done without JS, just had to do this because 
of a Chrome bug with HTML links to smooth scroll elements
*/

var next = document.querySelector(".next-arrow");
var prev = document.querySelector(".prev-arrow");
var slide = 1;
function nextSlide() {
    if (slide == 5) return;
    if (slide == 1) prev.classList.remove('arrow-inactive');
    slide++;
    var pic = document.getElementById("slide" + slide);
    pic.parentElement.scrollBy(pic.children[0].width, 0);
    if (slide == 5) next.classList.add('arrow-inactive');
}
function prevSlide() {
    if (slide == 1) return;
    if (slide == 5) next.classList.remove('arrow-inactive');
    slide--;
    var pic = document.getElementById("slide" + slide);
    pic.parentElement.scrollBy(-pic.children[0].width, 0);
    if (slide == 1) prev.classList.add('arrow-inactive');
}