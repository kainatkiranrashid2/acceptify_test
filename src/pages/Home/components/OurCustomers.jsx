import React from "react";
import CTASection from "./CTASection";

const OurCustomers = () => {
  const logos = [
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988799/components/our_customers_logo/google_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988798/components/our_customers_logo/apple_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988797/components/our_customers_logo/samsung_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988797/components/our_customers_logo/googleplay_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988795/components/our_customers_logo/visa_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988795/components/our_customers_logo/discover_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988794/components/our_customers_logo/jcb_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988793/components/our_customers_logo/unionpay_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733989402/components/our_customers_logo/americanexpress_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988793/components/our_customers_logo/mastercard_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733989402/components/our_customers_logo/evo_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733989403/components/our_customers_logo/worldpay_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988800/components/our_customers_logo/chase_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988799/components/our_customers_logo/fiserv_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988798/components/our_customers_logo/elavon_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988798/components/our_customers_logo/freedompay_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988797/components/our_customers_logo/mai_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733989402/components/our_customers_logo/ace_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988795/components/our_customers_logo/garuda_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988796/components/our_customers_logo/kaiser_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988795/components/our_customers_logo/alaska_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988799/components/our_customers_logo/fiji_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988796/components/our_customers_logo/suncountry_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733989402/components/our_customers_logo/scripps_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988794/components/our_customers_logo/jcb_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988793/components/our_customers_logo/nfl_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733989403/components/our_customers_logo/omniair_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733989404/components/our_customers_logo/globalpayments_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988793/components/our_customers_logo/airtanzania_logo.svg",
  ];

  return (
    <section>
      <div className="container">
        <div className="py-20">
          <div className="2xl:mx-[160px] xl:mx-8 md:mx-10 mb-[200px] relative">
            <div className="grid grid-cols-6 items-center justify-center gap-6">
              {logos.slice(0, 24).map((logo, index) => (
                <div
                  key={index}
                  className={`xl:w-[182px] xl:!h-[100px] py-6 px-5 rounded-[18px]  border-1 flex justify-center items-center shadow-[0px_3px_14px_0px_rgba(74,58,255,0.03),0px_-2px_4px_0px_rgba(20,20,43,0.02),0px_12px_24px_0px_rgba(20,20,43,0.04)] md:w-[120px] md:h-[66px] bg-white dark:bg-[#1D3B9D]`}>
                  <img
                    src={logo}
                    alt={`Customer logo ${index + 1}`}
                    className="h-10 object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Last row centered */}
            <div className="flex justify-center items-center mx-auto justify-items-center gap-6 mt-8">
              {logos.slice(24).map((logo, index) => (
                <div
                  key={index}
                  className={`xl:w-[182px] xl:!h-[100px] py-6 px-5 rounded-[18px]  border-1 flex justify-center items-center shadow-[0px_3px_14px_0px_rgba(74,58,255,0.03),0px_-2px_4px_0px_rgba(20,20,43,0.02),0px_12px_24px_0px_rgba(20,20,43,0.04)] md:w-[120px] md:h-[66px] bg-white`}>
                  <img
                    src={logo}
                    alt={`Customer logo ${index + 1}`}
                    className="h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <CTASection />
        </div>
      </div>
    </section>
  );
};

export default OurCustomers;
