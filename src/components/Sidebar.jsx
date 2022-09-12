import SocialNetworks from "./SocialNetWorks"
import Avatar from "../img/mar4.jpg"
import InformationContainer from "./InformationContainer"
import "../styles/components/sidebar.sass"
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiMysql,
    DiReact,
    DiSass,
    DiGit,
    DiGithub
} from "react-icons/di"


const technologies = [
    { id: "html", name:"HTML5", icon: <DiHtml5 />},
    { id: "css", name:"CSS3", icon: <DiCss3 />},
    { id: "js", name:"JavaScript", icon: <DiJsBadge />},
    { id: "sass", name:"Sass", icon: <DiSass />},
    { id: "mysql", name:"MySQL", icon: <DiMysql />},
    { id: "react", name:"ReactJs", icon: <DiReact />},
    { id: "git", name:"Git", icon: <DiGit />},
    { id: "github", name:"Github", icon: <DiGithub />},
    
]

const Sidebar = () => {
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="Marco Ricardo"/>
            <p className="title">Front End Developer</p>
            <SocialNetworks />
            <br />
            <InformationContainer />
            <br/>
            <h2 className="h2_tech">Technologies</h2>
            <section className="sidebar-container">
                <div className="sidebar-grid">
                    {technologies.map((tech) => (
                    <div className="sidebar-card2" id={tech.id} key={tech.id}>{tech.icon}
                        {tech.name}
                    </div>
                    ))}
                </div>
            </section>
            <br/>  
            <a className="btn"  href="./img/cv.pdf" download>Curriculum Download</a>
            <a className="btn" href="https://github.com/Marcooab" target="_blank">Github Profile</a>
        </aside> 
    )
}

export default Sidebar