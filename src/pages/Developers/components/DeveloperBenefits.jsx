import React from "react";

const DeveloperBenefits = () => {
  const benefits = [
    {
      heading: "Simplified Development",
      description:
        "The Acceptify SDK eliminates the need for developers to write level code to handle hardware and payment processor integrations. With an intuitive API, integrating a PCI-PTS certified payment device into a P2PE validate solution is seamless.",
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1735888329/components/developers_benefits/simplified_development.svg",
    },
    {
      heading: "Enhanced Security",
      description:
        "Acceptify is PCI-DSS and P2PE certified, ensuring that sensitive payment data is encrypted from the point of interactions, proving you with the highest level of security and taking your code our of scope for PCI Audits.",
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1735888204/components/developers_benefits/enhanced_security.svg",
    },
    {
      heading: "Payment Processor Portability",
      description:
        "Acceptify integrates with all major payment processors, ideal for software vendors as it allows customers to bring their own processor. Simplified development and a single code base to maintain.",
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
        "Acceptify ensures that your payment integration remains robust and compliant with evolving standards. The future proofing reduces the amount of time needed maintain code, protecting your investment. ",
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1735888243/components/developers_benefits/future_design_proof.svg",
    },
    {
      heading: "Developer Friendly Tools and Support ",
      description:
        "Comprehensive documentation, sample code and developer support resources make it easy for teams to integrate and deploy payment solutions confidently and quickly. ",
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1735888164/components/developers_benefits/dev_friendly.svg",
    },
  ];

  return (
    <section className="dark:bg-[#070713] relative overflow-hidden ">
      <div className="block absolute  opacity-100  dark:opacity-100 -left-72 bottom-0 transform -rotate-[9deg] z-0">
        <img
          src="https://res.cloudinary.com/dq5guzzge/image/upload/v1734065022/components/our_customers_dark_mode/industries_bg.png"
          alt=""
          className="w-1/2"
          loading="lazy"
        />
      </div>
      <div className="container ">
        <div className="pt-[100px] pb-[120px]  ">
          <div className="absolute right-0 bottom-0 opacity-10 dark:opacity-50 developerBenefit__oval"></div>
          <div className="absolute right-0 bottom-[25%] opacity-10 dark:opacity-50 developerBenefit__oval"></div>
          <div className="absolute left-0 bottom-[25%] developerBenefit__ovalLeft"></div>
          <h2 className="text-center mb-10 dark:text-white">
            Developer Benefits
          </h2>
          <div className="relative py-9 px-10 gap-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 overflow-hidden dark:bg-[#05122C] border-1 border border-[#3479FD] rounded-lg">
            <div className="absolute -top-48 dark:-top-56 -left-28 overflow-hidden developerBenefit__topGradient"></div>
            <div className="absolute -bottom-52 -right-20 opacity-20   developerBenefit__topGradient"></div>

            {benefits.map((benefit, index) => (
              <div
                className={`flex flex-col gap-3 justify-start items-start px-4 rounded-md relative ${
                  index === 1 || index === 4
                    ? "lg:before:absolute before:w-[2px] lg:before:bg-[#9EC1FF] lg:dark:before:bg-[#3479FD]  dark:lg:after:bg-[#3479FD] lg:before:-left-2 lg:before:top-4 lg:before:bottom-4 lg:after:absolute lg:after:w-[2px] lg:after:bg-[#9EC1FF] lg:after:right-0 lg:after:top-4 lg:after:bottom-4"
                    : ""
                }`}
                key={index}>
                <img
                  src={benefit.src}
                  alt={benefit.heading}
                  loading="lazy"
                  className="2xl:w-10 2xl:h-[38px] md:w-8 md:h-8"
                />
                <h3 className="mb-4 dark:text-white">{benefit.heading}</h3>
                <p className="dark:text-white">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center px-10 mb-[100px]">
          <div className="w-[400px] flex flex-col gap-4 ">
            <h2 className="dark:text-white">Get Notified </h2>
            <p className="dark:text-white">
              Join the waitlist today and stay ahead with payments anywhere
              anytime.{" "}
            </p>
            <button className="bg-primary w-fit text-white px-[14px] hover:bg-[#51A805] py-[10px] text-[16px]/[27px]  rounded-sm md:rounded-lg">
              Join the Waitlist
            </button>
          </div>
          <div className="w-[300px] h-[300px]">
            <img
              src="https://res.cloudinary.com/dq5guzzge/image/upload/v1735900657/components/developers_benefits/github_light.svg"
              alt=""
              className="w-full h-full object-contain dark:hidden"
            />
            <img
              src="https://res.cloudinary.com/dq5guzzge/image/upload/v1735900657/components/developers_benefits/github_dark.svg"
              alt=""
              className="w-full h-full object-contain hidden dark:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperBenefits;
