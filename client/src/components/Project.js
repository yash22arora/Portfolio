import "../assets/css/Projects.css";
import {GoMarkGithub} from 'react-icons/go';
import {FiExternalLink} from 'react-icons/fi';

const Project=(props)=>{
    
    let colorClass = "project "+ props.className;
    
    return(
        <div className={colorClass}>
            <div className="links">
                <GoMarkGithub className="github"/>
                <FiExternalLink className="external-link"/>
            </div>
            <h1 className="project-title">Project Name</h1>
            <div className="tech-used">
                <span>API</span>
                <span>React</span>
            </div>
        </div>
    );
}

export default Project;