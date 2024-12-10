const BYOP = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-20 " // Added useful background classes
    >
      <div className="container">
        <div className=" flex flex-col items-center justify-center  ">
          <div className=" flex flex-col items-center justify-center">
            <h1 className=" font-semibold mb-4">
              BYOP - Bring Your Own Processor
            </h1>
            <p className=" text-center md:w-[30rem] md:max-w-[30rem] lg:w-[56rem] lg:max-w-[56rem]  ">
              Acceptify empowers merchants with complete processor flexibility.
              Seamlessly integrate your preferred payment processing partner and
              move between processors without changing a line of code.
            </p>
          </div>
          <div className="w-[600px]">
            <video className="w-full h-full object-contain" autoPlay loop muted>
              <source
                src="https://res.cloudinary.com/dq5guzzge/video/upload/v1733836482/components/bring_your_own_process.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BYOP;

// https://res.cloudinary.com/dq5guzzge/video/upload/v1733312259/components/represent_your_brand.webm
// https://res.cloudinary.com/dq5guzzge/image/upload/v1733312955/components/represent_your_brand.svg
