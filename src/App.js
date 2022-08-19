import './App.css';
import { NavBar } from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Banner} from './components/Banner'
import {Skills} from './components/skills'
import Project from './components/Project'
import {Contact} from './components/Content'
import {Footer} from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
