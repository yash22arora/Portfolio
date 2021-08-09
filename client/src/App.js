
import './App.css';
import ContactMe from './components/Constact';
import Landing from './components/Landing';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';

function App() {
  
  const projects = [
    {
      title:"Notefy",
      techStack: ["React", "API", "Django"],
      github:"https://github.com/yash22arora/notefy",
      external:""
    },
    {
      title:"Amazon UX Case Study",
      techStack: ["Figma", "UI/UX"],
      behance:"https://www.behance.net/yashvararora",
      external:""
    },
    {
      title:"Servatom",
      techStack: ["React", "Github API"],
      github:"https://github.com/Servatom",
      external:"https://servatom.com/"
    },
    {
      title:"CTF Portal",
      techStack: ["React", "MongoDB", "NodeJs"],
      github:"",
      external:"https://drive.google.com/drive/folders/1GPvQykH30aIUUadY-kLmG-4XRcKDlarB?usp=sharing"
    },
    {
      title:"Second Hand",
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
