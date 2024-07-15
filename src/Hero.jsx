import cal from "./assets/cal.svg";
function Hero() {
  return (
    <div className="flex mx-auto h-1/2 w-full mt-5 items-center md:px-10 justify-around">
      <div className="lg:text-6xl md:text-3xl font-bold px-10 md:px-32">
        <p>
          Effortless <span className="text-brand"> Scheduling</span>, Automated
          for Your Convenience
        </p>
        <button className="bg-brand hover:scale-105 hover:opacity-90 max-sm:text-sm text-lg md:text-2xl w-1/2 mt-4 text-white py-1 sm:py-3 text-center rounded-md">
          Get Started
        </button>
      </div>
      <img src={cal} className="w-[40%] mr-10" />
    </div>
  );
}

export default Hero;
