import "../assets/css/Landing.css";
const Landing =()=>
{
    return(
        <div className="canvas">
            <div className="header-text">
                <p>HI THERE 👋, I'M</p>
                <h1>Yashvardhan Arora</h1>
                <p className="tagline">A budding Design-Minded Front-end Developer 💻</p>
            </div>
            <iframe className="spline" src='https://my.spline.design/lathegradientscopy-38d09b5aeb5e54685f9936f98ad04f2f/' frameborder='0' width='100%' height='100%'></iframe>
        </div>
    );
}

export default Landing;