
import './App.css';
import ContactMe from './components/Constact';
import Landing from './components/Landing';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Projects/>
      <SocialMedia/>
      <ContactMe/>
    </div>
  );
}

export default App;
