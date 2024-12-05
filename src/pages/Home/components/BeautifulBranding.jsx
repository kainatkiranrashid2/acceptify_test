const BeautifulBranding = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-20 " // Added useful background classes
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dq5guzzge/image/upload/v1733314604/components/represent_your_brand.svg)`,
      }}>
      <div className="container">
        <div className=" flex flex-col items-center justify-center  ">
          <div className=" flex flex-col items-center justify-center">
            <h1 className=" font-semibold mb-4">Represent Your Brand</h1>
            <p className=" md:w-[30rem] md:max-w-[30rem] lg:w-[37rem] lg:max-w-[37rem]  ">
              Acceptify uniquely provides a signature checkout experience by
              personalizing payment devices with your brand&apos;s logos and
              colors.
            </p>
          </div>
          <div className="w-full">
            <video className="w-full h-full object-contain" autoPlay loop muted>
              <source
                src="https://res.cloudinary.com/dq5guzzge/video/upload/c_fill,w_1920,h_800/v1733314709/components/represent_your_brand.webm"
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
