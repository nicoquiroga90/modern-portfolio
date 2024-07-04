import { check } from "../assets";
import { collabContent } from "../constants";
import Button from "./Button";
import Section from "./Section";

const Stack = () => {
  return (
    <Section crosses id="skills">
      <div className="container lg:flex">
        <div className="max-w-[100rem]">
          <h2 className="h2 mb-4 md:mb-8">My Skills</h2>

          <ul className="flex gap-6 mb-8">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-3 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-1">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button href="mailto:nicoq1290@gmail.com">Contact</Button>
        </div>
      </div>
    </Section>
  );
};

export default Stack;
