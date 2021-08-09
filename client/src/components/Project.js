import "../assets/css/Projects.css";
import {GoMarkGithub} from 'react-icons/go';
import {FiExternalLink} from 'react-icons/fi';
import {FaBehance} from 'react-icons/fa';

const Project=(props)=>{
    
    let colorClass = "project-wrapper "+ props.className;
    const isGithub = props.project.github;
    const isExternal = props.project.external;
    const isBehance = props.project.behance;

    return(
        <div className={colorClass}>
            <div className="border"></div>
            <div className="project">
                <div className="links">
                    {
                        isGithub?
                        <a href={isGithub} target="_blank"><GoMarkGithub  className="github"/></a>
                        :null
                    }
                    {
                        isExternal?
                        <a href={isExternal} target="_blank"><FiExternalLink className="external-link"/></a>
                        :null
                    }
                    {
                        isBehance?
                        <a href={isBehance} target="_blank"><FaBehance className="behance"/></a>
                        :null
                    }
                </div>
                <h1 className="project-title">{props.project.title}</h1>
                <div className="tech-used">
                    {/* <span>API</span>
                    <span>React</span> */}
                    {
                        props.project.techStack.map((tech)=>{
                            return(<span>{tech}</span>);
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Project;