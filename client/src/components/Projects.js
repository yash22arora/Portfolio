import "../assets/css/Projects.css";
import Project from "./Project";
const Projects =()=>
{
    var count=1;
    return(
        <div className="projects" id="projects">
           <div className="projects-heading">
                <p>-FEATURED PROJECTS</p>
                <h1>Things I've worked on 👨🏼‍💻</h1>
           </div>
           <div className="project-list">
                <Project className="blue"/>
                <Project className="pink"/>
                <Project className="blue"/>
                <Project className="pink"/>
                <Project className="blue"/>

           </div>
        </div>
    )
}

export default Projects;