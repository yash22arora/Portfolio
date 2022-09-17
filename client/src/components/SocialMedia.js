import "../assets/css/SocialMedia.css";
import SocialCard from "./SocialCard";

const SocialMedia = () => {
  const socialmedia = [
    {
      title: "Github",
      link: "https://github.com/yash22arora",
    },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/yash2210/",
    },
    {
      title: "Medium",
      link: "https://medium.com/@yashvardhanarora",
    },
    {
      title: "Twitter",
      link: "https://twitter.com/YashvardhanAro2",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/yashvardhan2210/",
    },
    // {
    //     title:"Dev.to",
    //     link:"https://dev.to/yash22arora"
    // },
    {
      title: "Behance",
      link: "https://www.behance.net/yashvararora",
    },
  ];

  let count = 0;
  const footer = ["pink", "blue"];

  return (
    <div className="social" id="social">
      <div className="social-heading">
        <p>-MY VIRTUAL IDENTITIES</p>
        <h1>My presence on the Web 🌐</h1>
      </div>
      <div className="social-list">
        {socialmedia.map((social) => {
          let footerNo = count % 2;
          count++;
          return (
            <SocialCard
              title={social.title}
              link={social.link}
              footer={footer[footerNo]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SocialMedia;
