import './App.css'
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skill from './components/Skill/Skill';
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <Skill />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
