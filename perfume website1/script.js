const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("navLinks");
const menuBtnIcon = menuBtn .querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks .addEventListener("click", (e) => {
    navLinks.classList.remove("Open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");

});

const scrollRevealOption = {
    distance:"50px", 
    origin: "50px",
    duration: 1000,
 
};
scrollReveal() .reveal(".header__image",{
    scrollRevealOption,
    origin: "right",
});

scrollReveal().reveal(".header_content h1",{
    scrollRevealOption,
    Delay:500,
});
scrollReveal().reveal(".header_content p",{
    scrollRevealOption,
    Delay:500,
});
scrollReveal().reveal(".header_content h5",{
    scrollRevealOption,
    Delay:1000,
});
scrollReveal().reveal(".header_content .size",{
    scrollRevealOption,
    Delay:1500,
});
scrollReveal().reveal(".header_content .bar",{
    scrollRevealOption,
    Delay:2000,
});
scrollReveal().reveal(".header_content .btn",{
    scrollRevealOption,
    Delay:500,
});