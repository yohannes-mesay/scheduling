import ball3 from "./assets/ball3.svg";
function How() {
  return (
    <div className="bg-gray-100 pb-10 mt-10 mx-auto">
      <p className="text-5xl text-center py-6 text-brand">How it Works?</p>
      <div className="tracking-wide relative mx-auto flex justify-center items-center">
        <div className="grid gap-6  grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col gap-2 pt-2 border-4 border-dashed hover:scale-105 hover:border-brand rounded-xl pl-2 max-sm:pl-3 w-full max-w-[37rem] mx-auto">
            <button className="bg-brand mb-2- text-white rounded-full w-14 h-14 p-2 pb-3 text-center text-4xl">
              1
            </button>
            <p className="text-2xl font-semibold">Register Subscription</p>
            <p>
              Sign up your company by providing the necessary information. After
              the verification process, you will receive admin credentials to
              access the dashboard.
            </p>
          </div>
          <div className="flex flex-col max-sm:pl-3 gap-2 pt-2 border-4 border-dashed hover:scale-105 hover:border-brand rounded-xl pl-2 w-full max-w-[37rem] mx-auto">
            <p className="bg-brand mb-2 text-white rounded-full w-14 h-14 p-2 pb-3 text-center text-4xl">
              2
            </p>
            <p className="text-2xl font-semibold">Register Subscription</p>
            <p>
              Sign up your company by providing the necessary information. After
              the verification process, you will receive admin credentials to
              access the dashboard.
            </p>
          </div>
          <div className="flex flex-col max-sm:pl-3 gap-2 pt-2 border-4 border-dashed hover:scale-105 hover:border-brand rounded-xl pl-2 w-full max-w-[37rem] mx-auto">
            <p className="bg-brand mb-2 text-white rounded-full w-14 h-14 p-2 pb-3 text-center text-4xl">
              3
            </p>
            <p className="text-2xl font-semibold">Register Subscription</p>
            <p>
              Sign up your company by providing the necessary information. After
              the verification process, you will receive admin credentials to
              access the dashboard.
            </p>
          </div>
          <div className="flex flex-col max-sm:pl-3 gap-2 pt-2 border-4 border-dashed hover:scale-105 hover:border-brand rounded-xl pl-2 w-full max-w-[37rem] mx-auto">
            <p className="bg-brand mb-2 text-white rounded-full w-14 h-14 p-2 pb-3 text-center text-4xl">
              4
            </p>
            <p className="text-2xl font-semibold">Register Subscription</p>
            <p>
              Sign up your company by providing the necessary information. After
              the verification process, you will receive admin credentials to
              access the dashboard.
            </p>
          </div>
        </div>
        <img
          src={ball3}
          className="xl:w-44 md:w-28 sm:w-24 w-20 max-sm:-bottom-16 lg:w-36 absolute -bottom-28 left-0 opacity-50"
        />
      </div>
    </div>
  );
}

export default How;
