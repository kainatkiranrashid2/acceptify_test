const BYOP = () => {
  return (
    <section
      className="" // Added useful background classes
    >
      <div className="container  ">
        <div className="py-20">
          <div className=" relative flex flex-col items-center justify-center overflow-hidden ">
            {/* <div className="absolute oval-shape right-0  "></div> */}
            <div className=" flex flex-col items-center justify-center">
              <h1 className=" font-semibold mb-4">
                BYOP - Bring Your Own Processor
              </h1>
              <p className=" text-center md:w-[526px] lg:w-[708px] xl:w-[796px] 2xl:w-[900px]  ">
                Acceptify empowers merchants with complete processor
                flexibility. Seamlessly integrate your preferred payment
                processing partner and move between processors without changing
                a line of code.
              </p>
            </div>
            <div className="2xl:w-[521.88px] 2xl:h-[363px] xl:w-[467px] xl:h-[324px] lg:w-[391px] lg:h-[269.08px] md:w-[297px] md:h-[204px]">
              <video
                className="w-full h-full object-contain"
                autoPlay
                loop
                muted>
                <source
                  src="https://res.cloudinary.com/dq5guzzge/video/upload/v1733836482/components/bring_your_own_process.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BYOP;

// https://res.cloudinary.com/dq5guzzge/video/upload/v1733312259/components/represent_your_brand.webm
// https://res.cloudinary.com/dq5guzzge/image/upload/v1733312955/components/represent_your_brand.svg
