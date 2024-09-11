window.onscroll = function(ev) {
 if (window.scrollY <= 500) {
      document.getElementById("navbarScroll").style.backgroundColor = "rgba(0, 0, 0, 0.2)"; 
   
 }
 else    
 {
     document.getElementById("navbarScroll").style.backgroundColor = "rgba(0, 0, 0, 0.8)"; 
 }
};

$("#offcanvasExample a").click(function(){
    $('.offcanvas').offcanvas('hide');
   });