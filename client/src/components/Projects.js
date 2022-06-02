import { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import "../assets/css/Projects.css";
import Project from "./Project";
const Projects =(props)=>
{
    const [projects, setProjects] = useState(props.projects);
    const [viewAll, setViewAll] = useState(false);    
    let count=0;
    const color =["pink", "blue"];
    
    const viewMoreHandler=()=>{
        setViewAll(!viewAll);
    }

    useEffect(()=>{
        viewAll?
        setProjects(props.projects)
        :
        setProjects(props.projects.slice(0,6));
    },[viewAll])
    
    return(
        <div className="projects" id="projects">
           <div className="projects-heading">
                <p>-FEATURED PROJECTS</p>
                <h1>Things I've worked on 👨🏼‍💻</h1>
           </div>
           <div className="project-list">
                {
                    projects.map((project)=>{
                        
                        let colorNo= count%2;
                        count++;
                        return(<Project project={project} className={color[colorNo]}/>)
                    })
                }
           </div>
           <span className="viewAll" onClick={viewMoreHandler}>
               {!viewAll? <>
                        View more
                        <FaArrowDown size={15}/>
                    </>:
                    <>
                        View less
                        <FaArrowUp size={15}/>
                    </>
               } 
               </span>
        </div>
    )
}

export default Projects;