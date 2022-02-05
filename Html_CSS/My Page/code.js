document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function mobileMenu() {
    let myMobileMenu = document.getElementById("myLinks");
    if (myMobileMenu.style.display === "block") {
      myMobileMenu.style.display = "none";
    } else {
      myMobileMenu.style.display = "block";
    }
  }





  document.querySelector(".menu_list_mobile").addEventListener('click', (event) => {
    document.getElementById("myLinks").style.display = "none";
  });




window.addEventListener('scroll', (event) => {
  const scrolled = window.scrollY
  const windowHeigth = window.innerHeight
    if(scrolled > windowHeigth) {
      document.querySelector("#nav_menu").style.backgroundColor = "black"
      document.querySelector("#nav_menu").style.transitionDuration = "1s"
      document.querySelector("#mobile_nav_menu").style.backgroundColor = "black"
      document.querySelector("#mobile_nav_menu").style.transitionDuration = "1s"
    } else
      {
        document.querySelector("#nav_menu").style.backgroundColor = "#4961e738"
        document.querySelector("#mobile_nav_menu").style.backgroundColor = "#4961e738"
      }
});



