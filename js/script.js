//Get the button:
const mybutton = document.querySelector("#myButton");

// When the user scrolls down 5px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction(){
   document.documentElement.scrollTop = 0; 
};



