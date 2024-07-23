import video1 from "../assets/pideo.mp4";
import video2 from "../assets/pideo2.mp4";
import video3 from "../assets/pideo3.mp4";
import video4 from "../assets/pideo4.mp4";

const Works = () => {
  return (
    <>
      <div className="mt-20">
        <h2 className="text-7xl font-blod-lg sm:text-6xl lg:text-8xl text-center tracking-wide">
          My Latest{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-800 text-transparent bg-clip-text">
            Project
          </span>
        </h2>
        <div className="flex flex-wrap justify-between">
          <div className="mt-10 p-2 w-full lg:w-10/12">
            <video
              autoPlay
              loop
              muted
              className="rounded-lg w-full border border-green-700 shadow-green-400 "
            >
              <source src={video2} type="video/mp4" />
            </video>
            <br />
            <video
              autoPlay
              loop
              muted
              className="rounded-lg w-full border border-green-700 shadow-green-400 ml-14 mt-10 "
            >
              <source src={video3} type="video/mp4" />
            </video>
            <br />
            <video
              autoPlay
              loop
              muted
              className="rounded-lg w-full border border-green-700 shadow-green-400 mt-10 "
            >
              <source src={video4} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
