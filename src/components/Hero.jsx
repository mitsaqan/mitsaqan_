import video1 from "../assets/pideo.mp4";

const Hero = () => {
  return (
    <>
      <div flex felx-col items-center mt-6 lg:mt-20>
        <h2 className="text-7xl font-blod-lg sm:text-6xl lg:text-9xl text-center tracking-wide">
          Hello.
        </h2>
        <h2 className="text-7xl font-blod-lg sm:text-6xl lg:text-9xl text-center tracking-wide">
          I'am{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-800 text-transparent bg-clip-text">
            Mitsaqan
          </span>
        </h2>
        <p className="  mt-7 text-xl text-center  text-neutral-500 max-w-5xl mx-auto">
          Fulltime Fullstack Web Developer. I enjoy building website that are a
          joy to use and support visions.{" "}
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md"
          >
            {" "}
            Work with Me
          </a>
        </div>
        <div className="flex mt-10 justify-center">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-8/12 border border-green-700 shadow-green-400 mx-2 my-4"
          >
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Hero;
