
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import {Blogs}from"./components/Blogs";
import { Footer } from "./components/Footer";
import { AboutMe} from "./components/AboutMe";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Blogs/>
      <Footer />
      {/* <AboutMe/> */}
    </div>
    
  );
}

export default App;
