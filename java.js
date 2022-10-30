const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu')

hamburger.addEventListener('click', () => {
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu'
        ? 'close'
        : 'menu';
        
    mobile_menu.classList.toggle('is-open');
})

function myFunction() {
    var input = document.getElementById("Search");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName('target');
  
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].innerText.toLowerCase().includes(filter)) {
        nodes[i].style.display = "block";
      } else {
        nodes[i].style.display = "none";
      }
    }
  }

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
  loader.style.display = "none";
})
