import Contactus from "./components/Contactus/Contactus";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skills/>
     <Experience/>
     <Contactus/>
     <Footer/>
    </div>
  );
}

export default App;
