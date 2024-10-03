var w = window.matchMedia("(max-width: 576px)");
var vid = document.getElementById("top-desk");
var source = document.createElement("source");
source.setAttribute("type", "video/mp4");
vid.appendChild(source);

function myFunction(w) {
 if (w.matches) {
   source.removeAttribute("src");
   source.setAttribute("src", "assets/video/Red-pill-mobile.mp4");
   vid.load();
   vid.play();
 } else {
   source.removeAttribute("src");
   source.setAttribute("src", "assets/video/red_pill_v2.mp4");
   vid.load();
   vid.play();
 }
};

myFunction(w);

w.addEventListener("change", function() {
 myFunction(w);
});

