import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <FirstVideo/>
        <Jason/>
      </div>
    </main>
  );
};

export default App;
