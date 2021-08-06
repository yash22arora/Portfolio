import "../assets/css/Projects.css";
import Project from "./Project";
const Projects =()=>
{
    return(
        <div className="projects" id="projects">
           <div className="projects-heading">
                <p>-FEATURED PROJECTS</p>
                <h1>Things I've worked on 👨🏼‍💻</h1>
           </div>
           <div className="project-list">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>

           </div>
        </div>
    )
}

export default Projects;