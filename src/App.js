import './App.css'
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skill from './components/Skill/Skill';
import Education from './components/Education/Education'
// import Projects from './components/Projects/Projects';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <Skill />
      <Education />
      {/* <Projects /> */}
      <Project />
      <Contact />
    </div>
  );
}

export default App;
