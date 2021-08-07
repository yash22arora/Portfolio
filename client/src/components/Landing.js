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
            <iframe className="spline" src='https://my.spline.design/lathelamps-d7eb10a1026df83a37190114418298e5/' frameborder='0' width='100%' height='100%'></iframe>
        </div>
    );
}

export default Landing;