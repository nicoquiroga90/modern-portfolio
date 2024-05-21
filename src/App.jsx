import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import Stack from "./components/Stack";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Testimonials />
        <Stack />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
