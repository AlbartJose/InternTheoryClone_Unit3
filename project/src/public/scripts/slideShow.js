
var i = 0;
slideshow(1);
function slideshow(x) {
    var div = [];
    div[0] = document.getElementById('slide00');
    div[1] = document.getElementById('slide01');
    div[2] = document.getElementById('slide02');
    div[3] = document.getElementById('slide03');
    for (let j = 0; j < div.length; j++) {
        div[j].style.display = "none";
    }
    i = i + x;
    if (i > div.length) i = 1;
    if (i == 0) i = 4;
    div[i - 1].style.display = "block";

}

setInterval(function () {
    slideshow(1);
}, 3000);

