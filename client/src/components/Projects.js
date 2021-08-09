import "../assets/css/Projects.css";
import Project from "./Project";
const Projects =(props)=>
{

    
    let count=0;
    const color =["pink", "blue"];
    
    return(
        <div className="projects" id="projects">
           <div className="projects-heading">
                <p>-FEATURED PROJECTS</p>
                <h1>Things I've worked on 👨🏼‍💻</h1>
           </div>
           <div className="project-list">
                {
                    props.projects.map((project)=>{
                        
                        let colorNo= count%2;
                        count++;
                        return(<Project project={project} className={color[colorNo]}/>)
                    })
                }

           </div>
        </div>
    )
}

export default Projects;