const BeautifulBranding = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-20 " // Added useful background classes
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dq5guzzge/image/upload/v1733314604/components/represent_your_brand.svg)`,
      }}>
      <div className="container">
        <div className=" flex flex-col items-center justify-between  ">
          <div className="lg:w-3/5 lg:max-w-3/5 flex  flex-col items-center justify-between">
            <h1 className=" font-semibold mb-4">Represent Your Brand</h1>
            <p className="w-full ">
              Custom-branded payment devices and cases are a powerful way to
              represent your business. Incorporating your brand’s colors, logo
              and design elements, the payment device reinforces brand
              recognition and transforms each transaction into a brand
              touchpoint.
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
    </div>
  );
};

export default BeautifulBranding;

// https://res.cloudinary.com/dq5guzzge/video/upload/v1733312259/components/represent_your_brand.webm
// https://res.cloudinary.com/dq5guzzge/image/upload/v1733312955/components/represent_your_brand.svg
