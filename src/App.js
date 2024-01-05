import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Slider from "./Components/Slider/Slider";
import Features from "./Components/Features/Features";
import Services from "./Components/Services/Services";
import Innovation from "./Components/Innovation/Innovation";
import Portfolio from "./Components/Portfolio/Portfolio";
import Satisfanction from "./Components/Satisfanction/Satisfanction";
import Members from "./Components/Members/Members";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import CopyRight from "./Components/CoptRight/CopyRight";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Slider />
      <Features />
      <Services />
      <Innovation />
      <Portfolio />
      <Satisfanction />
      <Members />
      <Team />
      <Contact />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
