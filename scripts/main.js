const mobileMenu = document.querySelector(".mobileMenu");
const closeMenu = document.querySelector(".closeMenu");
const body = document.querySelector("body");

mobileMenu.addEventListener("click", function(){
    const sideBar = document.querySelector(".sideBar");
    sideBar.style.display = "flex";
});

closeMenu.addEventListener("click", function(){
    const sideBar = document.querySelector(".sideBar");
    sideBar.style.display = "none";    
});


