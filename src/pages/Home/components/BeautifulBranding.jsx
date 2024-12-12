const BeautifulBranding = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-20 bg-[url(https://res.cloudinary.com/dq5guzzge/image/upload/v1733922457/components/ryb_light.svg)]
      dark:bg-[url(https://res.cloudinary.com/dq5guzzge/image/upload/v1733922457/components/ryb_dark.svg)] 
      dark:bg-[#010C22]" // Added useful background classes
    >
      <div className="container">
        <div className=" flex flex-col items-center justify-center relative  ">
          <div className=" flex flex-col items-center justify-center">
            <h1 className=" font-semibold mb-4 dark:text-white">
              Represent Your Brand
            </h1>
            <p className=" md:w-[30rem] text-center dark:text-white md:max-w-[30rem] lg:w-[37rem] lg:max-w-[37rem]  ">
              Acceptify uniquely provides a signature checkout experience by
              personalizing payment devices with your brand&apos;s logos and
              colors.
            </p>
          </div>
          <div className="2xl:w-[748px] 2xl:h-[453px] xl:w-[645px] xl:h-[391px] lg:w-[495.82px] lg:h-[295.26px] md:w-[371.7px] md:h-[219px] ">
            <video className="w-full h-full object-contain" autoPlay loop muted>
              <source
                src="https://res.cloudinary.com/dq5guzzge/video/upload/v1733991376/components/represent_your_branding.webm"
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

export default BeautifulBranding;

// https://res.cloudinary.com/dq5guzzge/video/upload/v1733312259/components/represent_your_brand.webm
// https://res.cloudinary.com/dq5guzzge/image/upload/v1733312955/components/represent_your_brand.svg
