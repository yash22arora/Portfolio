import "./App.css";
import ContactMe from "./components/Contact";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";
import VisitorCount from "./components/VisitorCount";

function App() {
  const projects = [
    {
      title: "Podcasts Page",
      body: "Designed and coded the Podcasts page for the DSC official website from scratch. Integrated the Anchor player to play any podcast directly from the page.",
      techStack: ["React", "API", "CSS"],
      github:
        "https://github.com/developer-student-club-thapar/officialWebsite/tree/master/client/src/pages/Podcasts",
      external: "https://dsctiet.tech/#/podcast",
    },
    {
      title: "30 Days GCP Leaderboard",
      body: "Made a Google themed website showing leaderboard for the students of Thapar participating in the 30 days of Google Cloud Challenge, with graphs and tables and much more!",
      techStack: ["React", "ChartJs 2.0", "API"],
      github: "https://github.com/yash22arora/30DaysOfCloudLeaderBoard",
      external: "https://30daysofgcp.dsctiet.tech/",
    },
    {
      title: "Notefy",
      body: "A note-making webapp with an elegant and intuitive UI",
      techStack: ["React", "API", "Django"],
      github: "https://github.com/yash22arora/notefy",
      external: "https://notefy.servatom.com/",
    },
    {
      title: "Amazon UX Case Study",
      body: "Recognising pain points in the Amazon shopping app",
      techStack: ["Figma", "UI/UX"],
      behance:
        "https://www.behance.net/gallery/125089737/Amazon-App-UX-Case-Study",
      external: "",
    },
    {
      title: "Servatom",
      body: "The website for Servatom, an organisation of enthusiastic techies.",
      techStack: ["React", "Github API"],
      github: "https://github.com/Servatom",
      external: "https://servatom.com/",
    },
    {
      title: "CTF Portal",
      body: "The online web portal to host a CTF event for my society",
      techStack: ["React", "MongoDB", "NodeJs"],
      github: "https://github.com/OWASP-STUDENT-CHAPTER/CTF",
      external:
        "https://drive.google.com/drive/folders/1GPvQykH30aIUUadY-kLmG-4XRcKDlarB?usp=sharing",
    },
    {
      title: "Shealth",
      body: "An online solution to organise your medical history and give your doctors secured access to your records",
      techStack: ["React", "API", "Django"],
      github: "https://github.com/yash22arora/Shealth/",
      external: "https://shealth.servatom.com/",
    },
    {
      title: "Second Hand",
      body: "An online platform for buying and selling used objects within college",
      techStack: ["HTML", "CSS", "Python"],
      github: "https://github.com/Servatom/Second-Hand",
      external: "",
    },
  ];

  document.addEventListener("visibilitychange", (e) => {
    if (document.visibilityState === "visible") {
      document.title = "Yashvardhan Arora";
    } else {
      document.title = "👀 Come back soon!";
    }
  });

  return (
    <div className="App">
      <Landing />
      <Projects projects={projects} />
      <SocialMedia />
      <ContactMe />
      {/* <VisitorCount/> */}
    </div>
  );
}

export default App;
