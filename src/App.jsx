// ./src/App.js
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Message from "./components/message";
import HomeVideo from "./components/HomeVideo";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Normal pages with Nav + Footer */}
        <Route
          path="/"
          element={
            <>
            <HomeVideo className = "fixed"/>
              <NavBar/>
      <div id="home"><Home /></div>
      <div id="skill"><Skill /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
