import { useState } from "react";

const DeveloperBenefits = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const benefits = [
    {
      heading: "Simplified Development",
      description:
        "The Acceptify SDK eliminates the need for developers to write complex code to handle hardware and payment processor integrations. With an intuitive API, integrating a PCI-PTS certified payment devices into a P2PE validated solution is seamless.",
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1735888329/components/developers_benefits/simplified_development.svg",
    },
    {
      heading: "Enhanced Security",
      description:
        "Acceptify is PCI-DSS and P2PE certified, ensuring that sensitive payment data is encrypted from the point of interaction, providing you with the highest level of security and taking your code out of scope for PCI Audits.",
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1735888204/components/developers_benefits/enhanced_security.svg",
    },
    {
      heading: "Payment Processor Portability",
      description:
        "Acceptify integrates with all major payment processors. Ideal for software vendors allowing simplified development. Ideal for customers allowing them to bring their processors. ",
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1735888318/components/developers_benefits/payment_processor.svg",
    },
    {
      heading: "Cost & Time Savings ",
      description:
        "Acceptify abstracts the complexities of hardware, processor and security specific coding, significantly reducing the effort required, allowing you to focus on the value added by your solution.",
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1735888117/components/developers_benefits/cost_and_time.svg",
    },
    {
      heading: "Future Proof Design ",
      description:
        "Acceptify ensures that your payment integration remains robust and compliant with evolving standards. The future-proofing reduces the amount of time needed to maintain code, protecting your investment. ",
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1735888243/components/developers_benefits/future_design_proof.svg",
    },
    {
      heading: "Developer Friendly Tools and Support ",
      description:
        "Comprehensive documentation, sample code and developer support resources make it easy for teams to integrate and deploy payment solutions confidently and quickly. ",
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1735888164/components/developers_benefits/dev_friendly.svg",
    },
  ];
  const handleClick = () => {
    console.log("Button clicked!");

    setShowModal(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className="dark:bg-[#070713] relative overflow-hidden ">
      <div className="hidden md:block absolute   opacity-100  dark:opacity-100 -left-72 bottom-0 transform -rotate-[9deg] z-0">
        <img
          src="https://res.cloudinary.com/dq5guzzge/image/upload/v1734065022/components/our_customers_dark_mode/industries_bg.png"
          alt=""
          className="w-1/2"
          loading="lazy"
        />
      </div>
      <div className="container z-10 ">
        <div className="py-10  md:pt-[100px] md:pb-[120px]  lg:mx-10 xl:mx-20 md:mx-[60px] mx-6 ">
          <div className="absolute right-0 z-0 bottom-0 opacity-10 dark:opacity-50 developerBenefit__oval"></div>
          <div className="absolute right-0 z-0 bottom-[25%] opacity-10 dark:opacity-30 developerBenefit__oval"></div>
          <div className=" block absolute rounded-full z-0 left-0 bottom-[15%] developerBenefit__ovalLeft"></div>
          <h2 className="text-center mb-10  dark:text-white">
            Developer Benefits
          </h2>
          <div className="relative px-10 py-9 md:py-9 md:px-10 gap-8 md:gap-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 overflow-hidden dark:bg-[#05122C] border-2 border-[#3479FD] rounded-[20px]">
            <div className="absolute -top-48 dark:-top-56 -left-28 overflow-hidden developerBenefit__topGradient"></div>
            <div className="absolute -bottom-52 -right-20 opacity-20   developerBenefit__topGradient"></div>

            {benefits.map((benefit, index) => (
              <div
                className={`flex flex-col gap-3 justify-start items-start px-4 rounded-md relative ${
                  index === 1 || index === 4
                    ? "lg:before:absolute before:w-[2px] lg:before:bg-[#9EC1FF] lg:dark:before:bg-[#3479FD]  dark:lg:after:bg-[#3479FD] lg:before:-left-2 lg:before:top-4 lg:before:bottom-4 lg:after:absolute lg:after:w-[2px] lg:after:bg-[#9EC1FF] lg:after:-right-4 lg:after:top-4 lg:after:bottom-4"
                    : ""
                }`}
                key={index}>
                <img
                  src={benefit.src}
                  alt={benefit.heading}
                  loading="lazy"
                  className="2xl:w-10 2xl:h-[38px] md:w-8 md:h-8 w-6 h-6"
                />
                <h3 className="mb-4 dark:text-white">{benefit.heading}</h3>
                <p className="dark:text-white">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex md:justify-between items-center px-10 mb-[100px] lg:mx-12 xl:mx-20">
          <div className="lg:w-[492px] md:w-[458px] flex flex-col gap-4 ">
            <h2 className="dark:text-white">Get Notified </h2>
            <p className="dark:text-white">
              Sign Up for SDK, Security, and Maintenence Updates Receive the
              latest news allowing you to integrate and test new features and
              fixes. We&apos;ll also notify you of scheduled updates ahead of
              time.
            </p>
            <div className="flex items-center gap-2">
              <button
                className="bg-primary w-fit text-white px-[14px] hover:bg-[#51A805] py-[10px] text-[16px]/[27px]  rounded-sm md:rounded-lg"
                style={{ position: "relative", zIndex: 20 }}
                onClick={handleClick}>
                Visit GitHub Repository
              </button>
              <button
                className="bg-transparent border-[2px] border-[#5D55F9] w-fit text-[#5D55F9] px-[14px]  py-[10px] text-[16px]/[27px]  rounded-sm md:rounded-lg"
                style={{ position: "relative", zIndex: 20 }}
                onClick={handleClick}>
                Quick Start Guide
              </button>
            </div>
          </div>
          <div className="md:w-[162px] md:h-[162px] lg:w-[206px] lg:h-[206px] dark:hidden">
            <img
              src="https://res.cloudinary.com/dq5guzzge/image/upload/v1735900649/components/developers_benefits/nsxguoxhm2k3ehiiwsez.svg"
              alt=""
              className="w-full h-full object-contain  "
            />
          </div>
          <div className="md:w-[162px] md:h-[162px] lg:w-[206px] lg:h-[206px] hidden dark:block">
            <img
              src="https://res.cloudinary.com/dq5guzzge/image/upload/v1735900657/components/developers_benefits/github_dark.svg"
              alt=""
              className="w-full h-full object-contain  hidden "
            />
          </div>
        </div>
        <div className="hidden md:flex md:flex-row-reverse justify-between items-center px-10 mb-[100px] lg:mx-12 xl:mx-20">
          <div className="xl:w-[551px]lg:w-[493px] md:w-[413px] flex flex-col gap-4 ">
            <h2 className="dark:text-white">Get Notified </h2>
            <p className="dark:text-white">
              Sign Up for SDK, Security, and Maintenence Updates Receive the
              latest news allowing you to integrate and test new features and
              fixes. We&apos;ll also notify you of scheduled updates ahead of
              time.
            </p>
            <button
              className="bg-primary w-fit text-white px-[14px] hover:bg-[#51A805] py-[10px] text-[16px]/[27px]  rounded-sm md:rounded-lg"
              style={{ position: "relative", zIndex: 20 }}
              onClick={handleClick}>
              Join the Waitlist
            </button>
          </div>
          <div className="md:w-[188px] md:h-[192px] lg:w-[277px] lg:h-[283px]">
            <img
              src="https://res.cloudinary.com/dq5guzzge/image/upload/v1736159167/components/developers_benefits/sdk_image.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
        </div>
        <div className="md:hidden flex flex-col justify-between mx-auto w-[289px] sm:w-[458px] items-center px-10 mb-[60px] ">
          <div className=" w-full mx-auto  flex flex-col  ">
            <h2 className="dark:text-white text-center font-semibold mb-4">
              Get Access to our SDK
            </h2>
            <p className="dark:text-white text-[14px]/[29px] mb-6 text-center">
              Request access to our SDK, documentation and code samples and see
              how easy it is to integrate Acceptify.
            </p>
          </div>
          <div className="w-[124px] h-[124px] sm:w-[162px] mb-6 sm:mb-8 sm:h-[162px] mb-6 dark:hidden">
            <img
              src="https://res.cloudinary.com/dq5guzzge/image/upload/v1735900649/components/developers_benefits/nsxguoxhm2k3ehiiwsez.svg"
              alt=""
              className="w-full h-full object-contain  "
            />
          </div>
          <div className="w-[124px] h-[124px] sm:w-[162px] sm:h-[162px] mb-6 sm:mb-8 hidden dark:block">
            <img
              src="https://res.cloudinary.com/dq5guzzge/image/upload/v1735900657/components/developers_benefits/github_dark.svg"
              alt=""
              className="w-full h-full object-contain   "
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-[188.12px] sm:w-auto">
            <button
              className=" bg-primary w-full text-white px-[14px] hover:bg-[#51A805] py-[10px]
               text-[11.74px]/[16.8px]  rounded-sm md:rounded-lg text-center"
              style={{ position: "relative", zIndex: 20 }}
              onClick={handleClick}>
              {" "}
              Visit GitHub Repository
            </button>
            <button
              className="bg-transparent w-full text-[#5D55F9] border-[2px] border-[#5D55F9]   px-[14px]  py-[10px] text-[11.74px]/[16.8px] font-bold  rounded-sm md:rounded-lg"
              style={{ position: "relative", zIndex: 20 }}
              onClick={handleClick}>
              {" "}
              Quick Start Guide
            </button>
          </div>
        </div>
        <div className="md:hidden flex flex-col justify-between items-center px-10 mx-auto w-[289px] sm:w-[458px] mb-[100px] lg:mx-12 xl:mx-20">
          <div className="  flex flex-col gap-4 ">
            <h2 className="dark:text-white text-center font-semibold">
              Get Notified{" "}
            </h2>
            <p className="dark:text-white text-center text-[14px]/[29px] w-full">
              Sign Up for SDK, Security, and Maintenence Updates Receive the
              latest news allowing you to integrate and test new features and
              fixes. We&apos;ll also notify you of scheduled updates ahead of
              time.
            </p>
          </div>
          <div className="w-[122px] h-[124px ]sm:w-[200px] sm:h-[192px] mb-8 md:mb-0 mt-6 md:mt-0">
            <img
              src="https://res.cloudinary.com/dq5guzzge/image/upload/v1736159167/components/developers_benefits/sdk_image.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
          <button
            className=" bg-primary w-fit text-white px-[14px] hover:bg-[#51A805] py-[10px] text-[16px]/[27px]  rounded-sm md:rounded-lg text-center"
            style={{ position: "relative", zIndex: 20 }}
            onClick={handleClick}>
            {" "}
            Join the Waitlist
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black bg-opacity-50 ">
            <div className="relative w-auto  mx-auto my-6">
              <div className="relative flex flex-col  bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none w-[300px] sm:w-[544px] md:w-[560px]">
                <div className="flex flex-col  overflow-y-auto scrollbar-hide">
                  <div className="py-9 px-10">
                    <div className="flex relative justify-between items-center mb-8">
                      <div></div>
                      <h2 className="text-center font-semibold">
                        Join the Waitlist
                      </h2>
                      <button
                        onClick={() => setShowModal(false)}
                        className="text-gray-500 hover:text-gray-700">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <div className="absolute bottom-[-20px] left-[5%] right-[5%] h-[1px] bg-gray-200"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="flex justify-center items-center ">
                        <label htmlFor="name" className="">
                          <p className="font-semibold lg:text-[16px]/[27px] ">
                            Name
                          </p>
                        </label>
                        <div className="sm:h-[35px] h-[28px]  w-[199px] sm:w-[379px] ml-4">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full h-full px-2 lg:text-[14px]/[27px] ml-2 border border-gray-300 rounded-md  bg-gray-100"
                          />
                        </div>
                      </div>

                      <div className="flex justify-center items-center">
                        <label htmlFor="email" className="">
                          <p className="font-semibold lg:text-[16px]/[27px] ">
                            Email
                          </p>
                        </label>
                        <div className="sm:h-[35px] h-[28px]  w-[199px] sm:w-[379px] ml-4">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="johndoe@youremail.com"
                            className="h-full px-2  ml-2 border border-gray-300 rounded-md w-full bg-gray-100"
                          />
                        </div>
                      </div>

                      <div className="float-end  gap-4 pt-4">
                        <button
                          type="submit"
                          className=" bg-primary text-white px-[14px] hover:bg-[#51A805] py-[10px] text-[16px]/[27px] rounded-sm md:rounded-lg">
                          Submit
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowModal(false)}
                          className=" px-[14px] ml-3  py-[10px] text-[16px]/[27px] rounded-sm md:rounded-lg border border-[#5D55F9] text-[#5D55F9] ">
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default DeveloperBenefits;
