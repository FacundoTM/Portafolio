import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {
  return (
    <>
      <div className="container mx-auto sm:py-4">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
