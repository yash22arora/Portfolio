
import './App.css';
import ContactMe from './components/Constact';
import Landing from './components/Landing';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';

function App() {
  
  const projects = [
    {
      title:"Notefy", 
      body:"A note-making webapp with an elegant and intuitive UI",
      techStack: ["React", "API", "Django"],
      github:"https://github.com/yash22arora/notefy",
      external:""
    },
    {
      title:"Amazon UX Case Study",
      body:"Recognising pain points in the Amazon shopping app",
      techStack: ["Figma", "UI/UX"],
      behance:"https://www.behance.net/gallery/125089737/Amazon-App-UX-Case-Study",
      external:""
    },
    {
      title:"Servatom",
      body:"The website for Servatom, an organisation of enthusiastic techies.",
      techStack: ["React", "Github API"],
      github:"https://github.com/Servatom",
      external:"https://servatom.com/"
    },
    {
      title:"CTF Portal",
      body:"The online web portal to host a CTF event for my society",
      techStack: ["React", "MongoDB", "NodeJs"],
      github:"https://github.com/OWASP-STUDENT-CHAPTER/CTF",
      external:"https://drive.google.com/drive/folders/1GPvQykH30aIUUadY-kLmG-4XRcKDlarB?usp=sharing"
    },
    {
      title:"Second Hand",
      body:"An online platform for buying and selling used objects within college",
      techStack: ["HTML", "CSS", "Python"],
      github:"https://github.com/Servatom/Second-Hand",
      external:""
    },
  ];


  
  return (
    <div className="App">
      <Landing/>
      <Projects projects={projects}/>
      <SocialMedia/>
      <ContactMe/>
    </div>
  );
}

export default App;
