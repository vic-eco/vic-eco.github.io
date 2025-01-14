const mode = document.getElementById("mode")
const modeSelector = document.querySelector("#mode img");
const body = document.getElementsByTagName("body")[0];
const header = document.getElementsByTagName("header")[0];
const nav = document.querySelectorAll("nav li a");
const bannerRole = document.querySelector(".role-container h2");
const bannerEmail = document.querySelector(".email-container h2");
const greeting = document.getElementsByClassName("greeting")[0];
const projects = document.getElementsByClassName("project-containers")[0];
const button = document.querySelector(".cv-section button");
const buttonText = document.querySelector(".cv-section a");



let lightMode = false;

function lightHandler(){
    if(!lightMode){
        modeSelector.src = "/resources/images/sun.png";
        modeSelector.style.filter = "invert(0)";

        body.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(197,197,197,1) 60%, rgba(85,85,85,1) 100%)";
        body.style.color = "rgb(35, 35, 35)";

        header.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(197,197,197,1) 60%, rgba(85,85,85,1) 100%)";
        header.style.setProperty("--after-bg-color", "black");
        nav.forEach(link=>{
            link.style.color = "black";
        })

        bannerRole.style.fontWeight = "400";
        bannerEmail.style.fontWeight = "400";

        document.getElementById("github").style.filter = "invert(1)";
        document.getElementById("linkedin").style.filter = "invert(1)";
        
        greeting.style.backgroundColor = "rgb(35, 35, 35)";
        let pis = greeting.getElementsByTagName("p");
        for (let i = 0; i < pis.length; i++) {
            pis[i].style.color = "white";
        }   

        projects.style.backgroundColor = "rgb(35, 35, 35)"
        let pjContainers = projects.getElementsByClassName("pj-container");
        for (let i = 0; i < pjContainers.length; i++) {
            pjContainers[i].style.color = "white";
            pjContainers[i].style.border = "3px solid white";
        }   

        button.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(197,197,197,1) 60%, rgba(85,85,85,1) 100%)"
        button.style.color = "black";
        buttonText.style.color = "rgb(35, 35, 35)";

    }
    else{
        modeSelector.src = "/resources/images/moon.png";
        modeSelector.style.filter = "invert(1)";

        body.style.removeProperty("background");
        body.style.removeProperty("color");

        header.style.removeProperty("background");
        header.style.setProperty("--after-bg-color", "white");
        nav.forEach(link=>{
            link.style.removeProperty("color");
            })

        bannerRole.style.fontWeight = "200";
        bannerEmail.style.fontWeight = "100";

        document.getElementById("github").style.filter = "invert(0)";
        document.getElementById("linkedin").style.filter = "invert(0)";

        greeting.style.backgroundColor = "white";
        let pis = greeting.getElementsByTagName("p");
        for (let i = 0; i < pis.length; i++) {
            pis[i].style.removeProperty("color");
        }

        projects.style.backgroundColor = "white"
        let pjContainers = projects.getElementsByClassName("pj-container");
        for (let i = 0; i < pjContainers.length; i++) {
            pjContainers[i].style.removeProperty("color");
            pjContainers[i].style.removeProperty("border");
        }   

        button.style.removeProperty("background");
        button.style.removeProperty("color");
        buttonText.style.removeProperty("color");

    }
    lightMode = !lightMode;
}

mode.onclick = lightHandler;