import "../assets/css/SocialMedia.css";
import SocialCard from "./SocialCard";

const SocialMedia=()=>
{
    return(
        <div className="social" id="social">
           <div className="social-heading">
                <p>-MY VIRTUAL IDENTITIES</p>
                <h1>My presence on the Web 🌐</h1>
           </div>
           <div className="social-list">
                <SocialCard title="Github" link="https://github.com/yash22arora" footer="pink"/>
                <SocialCard title="Linkedin" link="linkedin.com/in/yashvardhan-arora" footer="blue"/>
                <SocialCard title="Twitter" link="https://twitter.com/YashvardhanAro2" footer="pink"/>
                <SocialCard title="Instagram" link="https://www.instagram.com/yashvardhan2210/" footer="blue"/>
                <SocialCard title="Dev.to" link="https://dev.to/yash22arora" footer="pink"/>

           </div>
        </div>
    )
}

export default SocialMedia;