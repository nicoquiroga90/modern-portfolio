import { contact } from "../constants";
import Button from "./Button";

const ContactList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {contact.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex justify-center items-center h-[5.5rem] mb-6">
            {item.icon && <img src={item.icon} />}
          </div>

          <Button
            className="w-full mb-6"
            href={
              item.github
                ? item.github
                : item.linkedin
                ? item.linkedin
                : item.telegram
            }
            white={item.white}
          >
            {item.contact ? "Contact me" : "Check my profile"}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
