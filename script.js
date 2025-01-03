// smooth scrolling for navigation 
document.querySelectorAll("nav ul li a").forEach(link=>{
    link.addEventListener("click", function(e){
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({behavior: "smooth"});
    });
});

//page dark mode

const toggleButton = document.getElementById("darkModeToggle");
toggleButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});