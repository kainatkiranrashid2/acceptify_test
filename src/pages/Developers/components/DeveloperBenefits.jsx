import React from "react";

const DeveloperBenefits = () => {
  const benefits = [
    {
      heading: "Simplified Development",
      description:
        "The Acceptify SDK eliminates the need for developers to write level code to handle hardware and payment processor integrations. With an intuitive API, integrating a PCI-PTS certified payment device into a P2PE validate solution is seamless.",
      src: "",
    },
    {
      heading: "Enhanced Security",
      description:
        "Acceptify is PCI-DSS and P2PE certified, ensuring that sensitive payment data is encrypted from the point of interactions, proving you with the highest level of security and taking your code our of scope for PCI Audits.",
      src: "",
    },
    {
      heading: "Payment Processor Portability",
      description:
        "Acceptify integrates with all major payment processors, ideal for software vendors as it allows customers to bring their own processor. Simplified development and a single code base to maintain.",
      src: "",
    },

    {
      heading: "Cost & Time Savings ",
      description:
        "Acceptify abstracts the complexities of hardware, processor and security specific coding, significantly reducing the effort required, allowing you to focus on the value added by your solution.",
      src: "",
    },

    {
      heading: "Future Proof Design ",
      description:
        "Acceptify ensures that your payment integration remains robust and compliant with evolving standards. The future proofing reduces the amount of time needed maintain code, protecting your investment. ",
      src: "",
    },

    {
      heading: "Developer Friendly Tools and Support ",
      description:
        "Comprehensive documentation, sample code and developer support resources make it easy for teams to integrate and deploy payment solutions confidently and quickly. ",
      src: "",
    },
  ];
  return (
    <section className="container">
      <div className="my-24">
        <h2 className="text-center mb-10">Developer Benefits</h2>
        <div className="py-9 px-10 gap-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {benefits.map((benefit, index) => (
            <div
              className="flex flex-col justify-center items-start"
              key={index}>
              <img src="" alt="-----" />
              <h3 className="mb-4">{benefit.heading}</h3>
              <p className="">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperBenefits;
