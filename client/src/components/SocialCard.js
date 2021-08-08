import "../assets/css/SocialMedia.css";

import{FaLinkedin, FaGithub, FaTwitter, FaMedium, FaInstagram, FaDev } from 'react-icons/fa';
const SocialCard =(props)=>{
    
    const footerClass = "card-footer card-footer-"+ props.footer;

    const  logoHandler=()=>
    {
        let logo = props.title.toLowerCase();
        if(logo=='github')
        return(<FaGithub className="icon"/>)
        else if(logo=="linkedin")
        return(<FaLinkedin className="icon"/>)
        else if(logo=="twitter")
        return(<FaTwitter className="icon"/>)
        else if(logo=="instagram")
        return(<FaInstagram className="icon"/>)
        else if(logo=="medium")
        return(<FaMedium className="icon"/>)
        else if(logo=="dev.to")
        return(<FaDev className="icon"/>)
    }
    
    return(
        <a href={props.link}>
        <div className="social-card">
                <div className="card-top">
                    <h2>{props.title}</h2>
                    {
                        logoHandler()
                    }
                </div>
                <div className={footerClass}></div>
        </div>
        </a>
    );
}

export default SocialCard;