import clock from "./assets/clock.svg";
import booking from "./assets/booking.svg";
import right from "./assets/right.svg";
import ball1 from "./assets/ball1.svg";
import ball2 from "./assets/ball2.svg";
function Service() {
  const services = [
    {
      svg: clock,
      title: "Easy to use",
      description:
        "The page is designed for effortless use and seamless access.",
    },
    {
      svg: booking,
      title: "Easy to book",
      description: "Simple booking process with a few easy steps.",
    },
    {
      svg: right,
      title: "Fast and reliable",
      description: "Reliable services with quick response times.",
    },
  ];

  return (
    <div>
      <section className="bg-brand lg:hidden px-2 py-6 mt-5">
        <div className="px-4">
          <h2 className="text-4xl text-white text-center mb-8">
            Our best service for you!
          </h2>
          <p className="text-lg text-white text-center mb-8">
            Our platform takes the hassle out of scheduling, allowing you to
            focus on what really matters. Streamline your workflow and save time
            with our intuitive and powerful scheduling tools.
          </p>
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-2xl p-6 bg-slate-50 flex flex-col items-center"
              >
                <img
                  src={service.svg}
                  className="w-16 h-16 mb-4"
                  alt={service.title}
                />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-center text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-brand max-lg:hidden relative md:px-28 mx-32 py-24 rounded-3xl">
        <div className="text-white justify-center items-center max-md:flex-wrap flex pb-6">
          <p className="text-4xl w-full pb-8">Our best service for you!</p>
          <p className="text-lg mb-10">
            Our platform takes the hassle out of scheduling, allowing you to
            focus on what really matters. Streamline your workflow and save time
            with our intuitive and powerful scheduling tools.
          </p>
        </div>
        <div className="absolute  top-[55%] mt-10 left-14 right-14  justify-between  md:flex max-sm:flex-wrap gap-8 tracking-wider">
          <img
            src={ball1}
            className="absolute scale-90 -left-28 -z-10 -bottom-2"
          />
          <div className=" rounded-2xl  w-[50%] gap-3 items-center hover:scale-105 hover:opacity-95 justify-center shadow-2xl p-10 pb-16 flex bg-slate-50 flex-col">
            <img src={clock} className="max-w-16" />
            <p className="text-xl font-bold">Easy to use</p>
            <p className="text-center text-lg">
              The page is designed for effortless use and seamless access.
            </p>
          </div>
          <div className=" rounded-2xl w-[50%] gap-3 items-center hover:scale-105 hover:opacity-95 justify-center shadow-2xl p-10 pb-16 flex bg-slate-50 flex-col">
            <img src={booking} className="max-w-16" />
            <p className="text-xl font-bold">Easy to use</p>
            <p className="text-center text-lg">
              The page is designed for effortless use and seamless access.
            </p>
          </div>
          <div className=" rounded-2xl w-[50%] gap-3 items-center hover:scale-105 hover:opacity-95 justify-center shadow-2xl p-10 pb-16 flex bg-slate-50 flex-col">
            <img src={right} className="max-w-16" />
            <p className="text-xl font-bold">Easy to use</p>
            <p className="text-center text-lg">
              The page is designed for effortless use and seamless access.
            </p>
          </div>
        </div>

        <img src={ball2} className="absolute opacity-90 -mr-32 -z-10 py-20 right-0" />
      </div>
      <div className="invisible max-lg:hidden rounded-2xl w-[50%] gap-3 items-center hover:scale-105 hover:opacity-95 justify-center shadow-2xl p-10 pb-16 flex bg-slate-50 flex-col">
        <img src={booking} className="max-w-16" />
        <p className="text-xl font-bold">Easy to use</p>
        <p className="text-center text-lg">
          The page is designed for effortless use and seamless access.
        </p>
      </div>
    </div>
  );
}

export default Service;
