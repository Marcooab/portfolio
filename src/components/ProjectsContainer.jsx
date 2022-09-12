import "../styles/components/projectscontainer.sass"

import { FcCalculator } from "react-icons/fc"; 
import { FcOldTimeCamera } from "react-icons/fc";
import { MdLogin } from"react-icons/md";
import { FcViewDetails } from "react-icons/fc";
import { FcQuestions } from "react-icons/fc"; 
import { FcContacts } from "react-icons/fc"; 
import { FcShipped} from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import gitpng from "../img/github.png";
import website from "../img/website.png";

const technologies = [
    { id: "port", name:"Portfolio", icon: <FcBusinessman />, txt:"Code structure of this page.", techs: "Techs: HTML, CSS, JavaScript, ReactJs, Vite", linkgit:"https://github.com/Marcooab/portfolio"},

    { id: "calc", name:"Calculator", icon: <FcCalculator />, txt:"Project simulating the Microsoft Windows calculator.", techs: "Techs: HTML, CSS, JavaScript, ReactJs", linkgit:"https://github.com/Marcooab/calculator"},

    { id: "system login", name:"System Login", icon: <MdLogin />, txt:"Login System with validation features.", techs: "Techs: HTML, CSS, JavaScript, ReactJs", linkgit:"https://github.com/Marcooab/system_login"},

    { id: "quiz", name:"Quiz", icon: <FcQuestions />, txt:"Q&A Quiz Project", techs: "Techs: HTML, CSS, JavaScript, ReactJs, Vite", linkgit:"https://github.com/Marcooab/quiz"},

    { id: "task maker", name:"Task Maker", icon: <FcViewDetails />, txt:"Task Organizer powered by Vanilla JavaScript", techs: "Techs: HTML, CSS, JavaScript", linkgit:"https://github.com/Marcooab/to_do"},

    { id: "clone", name:"Clone", icon: <FcContacts />, txt:"Clone simulating the iPhone 13 Pro homepage.", techs: "Techs: HTML, CSS; JavaScript", linkgit: "https://github.com/Marcooab/-iphone_clone" },

    { id: "photo gallery", name:"Photo Gallery", icon: <FcOldTimeCamera />, txt:"Photo Gallery in dark tones.", techs: "Techs: HTML, CSS, JavaScript, SASS", linkgit:"https://github.com/Marcooab/photo_gallery" },

    { id: "empty", name:"Under Construction", icon: <FcShipped />, txt:"XxXxXxXxXxX XxXxXxXxXxXxX", techs: "Techs: xXxXxXxXxX", linkgit:"#"},
    
    { id: "empty2", name:"Under Construction", icon: <FcShipped />, txt:"XxXxXxXxXxX XxXxXxXxXxXxX", techs: "Techs: xXxXxXxXxX", linkgit:"#" },
]

const ProjectContainer = () => {
    return (
        <section className="project-container">
            <h2>My Projects</h2>
            <div>
                <section className="project-container">
                    <div className="project-grid">
                    {technologies.map((tech) => (
                        <div className="project-card" id={tech.id} key={tech.id}>
                            <div className="project-info">
                                {tech.icon}
                                <h3 className="tech_title">{tech.name}</h3>
                                <h4 className="tech_text">{tech.txt}</h4>
                                <h4 className="tech_text">{tech.techs}</h4>
                                <div className="container-buttons">
                                    <a href="https://github.com/Marcooab" target="_blank" >
                                        <button className="button" title="open project">
                                            <img src={website} alt=""/>
                                        </button>
                                    </a>
                                    <a href={tech.linkgit} target="_blank" >
                                        <button className="button" title="open project on Github">
                                            <img src={gitpng} alt=""/>
                                        </button>
                                    </a>
                                </div>
                                <h5>{tech.state}</h5>   
                            </div> 
                        </div>
                        ))}    
                    </div>
                </section>    
            </div>
        </section>
    )
}

export default ProjectContainer

