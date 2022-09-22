import "../assets/css/Landing.css";
import { emojisplosion, emojisplosions } from "emojisplosion";
const Landing = () => {
  const element = document.getElementById("highfive");
  console.log(element);

  const cumulativeOffset = function (element) {
    let top = 0,
      left = 0;
    do {
      top += element?.offsetTop || 0;
      left += element?.offsetLeft || 0;
      element = element?.offsetParent;
    } while (element);
    console.log(top, left);
    return {
      top: top,
      left: left,
    };
  };
  const onHover = () => {
    emojisplosion({
      className: "emojiExplosion",
      emojis: ["👋", "🤙", "🙌"],
      physics: {
        gravity: 0.6,
        initialVelocities: {
          y: {
            min: -25,
            max: -10,
          },
          x: {
            min: -10,
            max: 10,
          },
        },
        fontSize: {
          min: 20,
          max: 70,
        },
      },
      position: {
        x: 0,
        y: cumulativeOffset(element).top,
        // y: 0,
      },
    });
  };

  document.addEventListener("keypress", (e) => {
    if (e.key.toLowerCase() === "y") {
      onHover();
    }
  });

  return (
    <div className="canvas">
      <div className="header-text">
        <p>
          HI THERE{" "}
          <span id="highfive" onMouseEnter={onHover}>
            👋
          </span>
          , I'M
        </p>
        <h1 id="yashvardhan">Yashvardhan Arora</h1>
        <p className="tagline">
          A budding Design-Minded Front-end Developer 💻
        </p>
      </div>
      {/* <iframe className="spline" src='https://my.spline.design/lathelamps-d7eb10a1026df83a37190114418298e5/' frameborder='0' width='100%' height='100%'></iframe> */}
    </div>
  );
};

export default Landing;
