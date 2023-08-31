import './App.css'
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skill from './components/Skill/Skill';
import Education from './components/Education/Education'
// import Projects from './components/Projects/Projects';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { themeContext } from './context';
import { useContext } from 'react';
function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : ""
      }}>


      <Navbar/>
      <Intro />
      <Skill />
      <Education />
      {/* <Projects /> */}
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
