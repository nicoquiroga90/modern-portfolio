import Section from "./Section";
import Heading from "./Heading";
import { project1, project2, check } from "../assets";
import { timeoffServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Projects = () => {
  return (
    <Section id="projects">
      <div className="container">
        <Heading
          title="My projects"
          text="Some things I've built with love and expertise"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <a
              href="https://time-off-nu.vercel.app/"
              className="block w-full h-full"
              target="_blank"
            >
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none xl:w-screen">
                <img
                  className="w-full h-full object-cover md:object-right opacity-65"
                  width={1600}
                  alt="TimeOFF App"
                  height={730}
                  src={project1}
                />
              </div>

              <div className="relative z-1 max-w-[17rem] ml-auto bg-n-5 p-4 rounded">
                <h4 className="h4 mb-4">TimeOFF App</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  A web-based solution aimed at streamlining the management of
                  vacations and time off for teams within organizations.
                </p>
                <ul className="body-2">
                  {timeoffServices.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start py-4 border-t border-n-6"
                    >
                      <img width={24} height={24} src={check} />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <a
              href="https://countries-app-topaz.vercel.app/"
              className="block w-full h-full"
              target="_blank"
            >
              <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src={project2}
                    className="h-full w-full object-cover"
                    width={630}
                    height={750}
                    alt="countries"
                  />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                  <h4 className="h4 mb-4">Countries App</h4>
                  <p className="body-2 mb-[3rem] text-n-3">
                    A REST API to display countries data.
                  </p>
                </div>

                <PhotoChatMessage />
              </div>{" "}
            </a>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Web Solutions</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Bring your clients dynamic solutions with practical and
                  eye-catching interfaces.
                  <br /> What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://www.loom.com/share/e595a6a0a609471191ae8dda1db28831?sid=05e65aae-b4dd-4819-ad87-c9a471c55c25"
                className="block w-full h-full"
                target="_blank"
              >
                <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                  <img
                    src="https://raw.githubusercontent.com/nicoquiroga90/meal-sharing/main/Meal-SharinigAppProjectPresentation-ezgif.com-video-to-gif-converter.gif"
                    className="w-full h-full object-cover"
                    width={520}
                    height={400}
                    alt="Meal Sharing"
                  />

                  <VideoChatMessage />
                  <VideoBar />
                </div>
              </a>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Projects;
