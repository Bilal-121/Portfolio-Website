// smooth scrolling for navigation 
document.querySelectorAll("nav ul li a").forEach(link=>{
    link.addEventListener("click", function(e){
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({behavior: "smooth"});
    });
});

//Array of project data
const projects = [{
    title: "Face Recognition Attendance System",
    description: "Developed a system using Python for facial recognition to track attendance, utilising machine learning techniques. Managed data manipulation and analysis with Pandas and implemented machine learning algorithms using scikit-learn.",
    link: "#"
},
{
    title: "Portfolio Website Development",
    description: "Currently developing a personal portfolio website to showcase projects and technical skills. Utilising HTML5, CSS3 (Bootstrap), and JavaScript (React) to create a responsive and interactive user experience.",
    link: "#"
},
{
    title: "Cinema Ticket Booking Website",
    description: "Created a dynamic web application using HTML5, CSS3, and PHP with RESTful APIs for seamless database interaction.",
    link: "#"
},
{
    title: "Expenses Tracking System",
    description: "NOT YET STARTED. Plan to develop a system for tracking expenses using Python. Features will include receipt scanning and manual entry. Tools: Python, Tkinter, SQLite.",
    link: "#"
},
{
    title: "Job Application Auto Fill",
    description: "NOT YET STARTED. Aim to create a Chrome extension to automate job application form filling. Tools: JavaScript, HTML, CSS.",
    link: "#"
},
{
    title: "Football Blog",
    description: "NOT YET STARTED. Plan to build a football-focused blog with dynamic content and user interaction. Tools: React, Node.js, MongoDB.",
    link: "#"
},
{
    title: "Web App Notebook Scratch",
    description: "NOT YET STARTED. Intended as a lightweight web application for quick notes and sketches. Tools: JavaScript, HTML, CSS, Firebase.",
    link: "#"
},
{
    title: "Football Score Tracking",
    description: "NOT YET STARTED. Plan to visualize premier league club goals scored each year. Tools: Python (Matplotlib, Pandas), JavaScript (D3.js).",
    link: "#"
},
{
    title: "Personal Gaming Time Usage Statistics",
    description: "NOT YET STARTED. Aim to track and visualize personal gaming time for games like COD and League of Legends. Tools: Python, Matplotlib, SQLite.",
    link: "#"
},
];

//Rendering projects dynamicaly
const projectsContainer = document.querySelector("#projects .grid");
projects.forEach(project => {
    const projectCard = `
        <div class="bg-white shadow-lg rounded-lg p-4">
            <h3 class="text-xl font-bold">${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="text-blue-500 underline">View Project</a>
        </div>
    `;
    projectsContainer.innerHTML += projectCard;
})