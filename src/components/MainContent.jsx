import AboutContainer from "./AboutContainer"
import ProjectsContainer from "./ProjectsContainer"

import "../styles/components/maincontent.sass"

const MainContent = () => {
    return(
        <main id="main_content">
            <AboutContainer />  
            <ProjectsContainer />
            <br />   
        </main>
    )
}

export default MainContent