const portal1 = document.querySelector(".portal1");
const flower1 = document.querySelector(".flower1"); // Get the button from the page

const portal2 = document.querySelector(".portal2");
const flower2 = document.querySelector(".flower2");

const portal3 = document.querySelector(".portal3");
const flower3 = document.querySelector(".flower3");
// Detect clicks on the button
if (portal1) {
  portal1.onclick = function() {
    //The JS works in conjunction with the 'dipped' code in style.css
    //container.classList.toggle("container-clicked");
    flower1.classList.toggle("appear1");
    
  };
}

if (portal2) {
    portal2.onclick = function() {
      //The JS works in conjunction with the 'dipped' code in style.css
      //container.classList.toggle("container-clicked");
      flower2.classList.toggle("appear2");
      
    };
  }

  if (portal3) {
    portal3.onclick = function() {
      //The JS works in conjunction with the 'dipped' code in style.css
      //container.classList.toggle("container-clicked");
      flower3.classList.toggle("appear3");
      
    };
  }