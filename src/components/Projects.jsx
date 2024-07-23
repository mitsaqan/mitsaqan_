import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Projects = () => {
  return (
    <>
      <div className="relative mt-20 border-b border-neutral-80 min-h-[800px]">
        <div className="text-center">
          <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Projects
          </span>
          <h2 className="text-7xl font-blod-lg sm:text-6xl lg:text-8xl mt-10 lg:mt-20 text-center tracking-wide">
            I build
          </h2>
          <h2 className="text-7xl font-blod-lg sm:text-6xl lg:text-8xl mt-7  text-center tracking-wide">
            <span className="bg-gradient-to-r from-green-500 to-emerald-800 text-transparent bg-clip-text">
              website
            </span>{" "}
            for
          </h2>
          <h2 className="text-7xl font-blod-lg sm:text-6xl lg:text-8xl mt-7  text-center tracking-wide">
            brands.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
          {pricingOptions.map((option, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 ">
              <div className="p-10 border border-neutral-700 rounded-xl">
                <p className="text-4xl mb-8">{option.title} </p>
                <ul>
                  {option.skill.map((skill, index) => (
                    <li key={index} className="mt-8 flex items-center">
                      <CheckCircle2 />
                      <span className="ml-2">{skill}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-green-900 border border-green-900 rounded-lg transition-duration-200"
                >
                  {" "}
                  Work with Me
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
