import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Stack />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
