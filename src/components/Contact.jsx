import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import ContactList from "./ContactList";
import { LeftLine, RightLine } from "./design/Pricing";

const Contact = () => {
  return (
    <Section className="overflow-hidden" id="contact">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Get started with your website."
          title="Hey! Lets talk about digital solutions..."
        />

        <div className="relative">
          <ContactList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
