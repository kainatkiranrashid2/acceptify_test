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
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1735043760/components/our_customers_logo/american_exp_light.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988793/components/our_customers_logo/mastercard_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733989402/components/our_customers_logo/evo_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733989403/components/our_customers_logo/worldpay_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988800/components/our_customers_logo/chase_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988799/components/our_customers_logo/fiserv_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988798/components/our_customers_logo/elavon_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988798/components/our_customers_logo/freedompay_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1735043872/components/our_customers_logo/global_payments_light.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1735043929/components/our_customers_logo/ace_parking.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988796/components/our_customers_logo/kaiser_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988795/components/our_customers_logo/alaska_logo.svg",

    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988796/components/our_customers_logo/suncountry_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733989402/components/our_customers_logo/scripps_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988793/components/our_customers_logo/ticketmaster_logo.svg",

    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988793/components/our_customers_logo/nfl_logo.svg",
  ];
  const darkLogos = [
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734070605/components/our_customers_dark_mode/google_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734065016/components/our_customers_dark_mode/apple_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734065021/components/our_customers_dark_mode/samsung_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734070672/components/our_customers_dark_mode/googleplay_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734065022/components/our_customers_dark_mode/visa_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734065019/components/our_customers_dark_mode/discover_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988794/components/our_customers_logo/jcb_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733988793/components/our_customers_logo/unionpay_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1735044103/components/our_customers_dark_mode/american_express.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734065016/components/our_customers_dark_mode/mastercard_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734065018/components/our_customers_dark_mode/evo_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734065020/components/our_customers_dark_mode/worldpay_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734070789/components/our_customers_dark_mode/chase_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734065016/components/our_customers_dark_mode/fiserv_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734065019/components/our_customers_dark_mode/elavon_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734065018/components/our_customers_dark_mode/freedompay_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1735187423/components/our_customers_dark_mode/global_payments_dark.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733989402/components/our_customers_logo/ace_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734948806/components/our_customers_dark_mode/kaiser_logo_dark.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734069883/components/our_customers_dark_mode/alaska_logo.svg",

    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734069908/components/our_customers_dark_mode/suncountry_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734065020/components/our_customers_dark_mode/scripps_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734065019/components/our_customers_dark_mode/ticketmaster_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1734065020/components/our_customers_dark_mode/nfl_logo.svg",
  ];

  return (
    <section className="dark:bg-[#06142F]">
      <div className="container">
        <div className="py-20">
          <div className="hidden md:block 2xl:mx-[160px] xl:mx-[130px] lg:mx-[196px] md:mx-12 mx-4 sm:mx-10 xl:mb-[140px] lg:mb-[150px]  sm:hidden relative dark:hidden">
            <div className="hidden md:grid grid-cols-6 items-center justify-center gap-2 md:gap-6">
              {logos.slice(0, 24).map((logo, index) => (
                <div
                  key={index}
                  className={`2xl:w-[182px] 2xl:!h-[100px] xl:w-[150px] xl:h-[82.42px] lg:w-[95px] lg:h-[52px] md:w-[100px] md:h-[46px] sm:w-[92px] sm:h-[51px] w-[54px] h-7 px-2 py-2  md:py-6 md:px-5 rounded-[8px] sm:rounded-[10px] md:rounded-[18px]  border-1 flex justify-center items-center shadow-[0px_3px_14px_0px_rgba(74,58,255,0.03),0px_-2px_4px_0px_rgba(20,20,43,0.02),0px_12px_24px_0px_rgba(20,20,43,0.04)] bg-white dark:bg-[#1D3B9D]`}>
                  <img
                    src={logo}
                    alt={`Customer logo ${index + 1}`}
                    className={`${
                      index === 16
                        ? "h-[45px] object-contain"
                        : "h-12  object-contain "
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="block 2xl:mx-[160px] xl:mx-[130px] lg:mx-[196px] md:mx-12 mx-4 sm:mx-10 xl:mb-[140px] lg:mb-[150px] sm:mb-[0px] mb-[60px] relative dark:hidden">
            <div className="grid md:hidden  grid-cols-5 items-center justify-center gap-2 mb-2">
              {logos.slice(0, 20).map((logo, index) => (
                <div
                  key={index}
                  className={`2xl:w-[182px] 2xl:!h-[100px] xl:w-[150px] xl:h-[82.42px] lg:w-[95px] lg:h-[52px] md:w-[83px] md:h-[46px] sm:w-[92px] sm:h-[51px] w-[54px] h-8 px-2 py-2  md:py-6 md:px-5 rounded-[8px] sm:rounded-[10px] md:rounded-[18px]  border-1 flex justify-center items-center shadow-[0px_3px_14px_0px_rgba(74,58,255,0.03),0px_-2px_4px_0px_rgba(20,20,43,0.02),0px_12px_24px_0px_rgba(20,20,43,0.04)] bg-white dark:bg-[#1D3B9D]`}>
                  <img
                    src={logo}
                    alt={`Customer logo ${index + 1}`}
                    className={`h-7 object-contain ${
                      index === 16 ? "!h-[18px] " : ""
                    }`}
                  />
                </div>
              ))}
            </div>
            <div className="flex md:hidden  items-center justify-center gap-2 md:gap-6">
              {logos.slice(20, 24).map((logo, index) => (
                <div
                  key={index}
                  className={`2xl:w-[182px] 2xl:!h-[100px] xl:w-[150px] xl:h-[82.42px] lg:w-[95px] lg:h-[52px] md:w-[83px] md:h-[46px] sm:w-[92px] sm:h-[51px] w-[54px] h-8 px-2 py-2  md:py-6 md:px-5 rounded-[8px] sm:rounded-[10px] md:rounded-[18px]  border-1 flex justify-center items-center shadow-[0px_3px_14px_0px_rgba(74,58,255,0.03),0px_-2px_4px_0px_rgba(20,20,43,0.02),0px_12px_24px_0px_rgba(20,20,43,0.04)] bg-white dark:bg-[#1D3B9D]`}>
                  <img
                    src={logo}
                    alt={`Customer logo ${index + 1}`}
                    className={`h-7 md:h-8 object-contain ${
                      index === 16 ? "h-10 md:h-20" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden  2xl:mx-[160px] xl:mx-[130px] lg:mx-[196px] md:mx-12 mx-4 sm:mx-10 xl:mb-[140px] lg:mb-[150px] sm:mb-[0px] mb-[0px] relative  dark:block">
            <div className="hidden md:grid grid-cols-6 items-center justify-center gap-1 md:gap-6">
              {darkLogos.slice(0, 24).map((logo, index) => (
                <div
                  key={index}
                  className={`2xl:w-[182px] 2xl:!h-[100px] xl:w-[150px] xl:h-[82.42px] lg:w-[95px] lg:h-[52px] md:w-[100px] md:h-[46px] sm:w-[92px] sm:h-[51px] w-[54px] h-7 px-2 py-2  md:py-6 md:px-5 rounded-[8px] sm:rounded-[10px] md:rounded-[18px]  border-1 flex justify-center items-center shadow-[0px_3px_14px_0px_rgba(74,58,255,0.03),0px_-2px_4px_0px_rgba(20,20,43,0.02),0px_12px_24px_0px_rgba(20,20,43,0.04)]   dark:bg-[#1D3B9D]`}>
                  <img
                    src={logo}
                    alt={`Customer logo ${index + 1}`}
                    className={`${
                      index === 16
                        ? "h-[45px] object-contain"
                        : "h-12  object-contain "
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden 2xl:mx-[160px] xl:mx-[130px] lg:mx-[196px] md:mx-12 mx-4 sm:mx-10 xl:mb-[140px] lg:mb-[150px] sm:mb-[80px] mb-[60px] relative  dark:block">
            <div className="grid md:hidden grid-cols-5 items-center justify-center gap-2 mb-2">
              {darkLogos.slice(0, 20).map((logo, index) => (
                <div
                  key={index}
                  className={`2xl:w-[182px] 2xl:!h-[100px] xl:w-[150px] xl:h-[82.42px] lg:w-[95px] lg:h-[52px] md:w-[83px] md:h-[46px] sm:w-[92px] sm:h-[51px] w-[54px] h-8 px-2 py-2  md:py-6 md:px-5 rounded-[8px] sm:rounded-[10px] md:rounded-[18px]  border-1 flex justify-center items-center shadow-[0px_3px_14px_0px_rgba(74,58,255,0.03),0px_-2px_4px_0px_rgba(20,20,43,0.02),0px_12px_24px_0px_rgba(20,20,43,0.04)] bg-white dark:bg-[#1D3B9D]`}>
                  <img
                    src={logo}
                    alt={`Customer logo ${index + 1}`}
                    className={`h-7 object-contain ${
                      index === 16 ? "!h-[18px]  " : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="md:hidden flex  items-center justify-center gap-2 md:gap-6">
              {darkLogos.slice(20, 24).map((logo, index) => (
                <div
                  key={index}
                  className={`2xl:w-[182px] 2xl:!h-[100px] xl:w-[150px] xl:h-[82.42px] lg:w-[95px] lg:h-[52px] md:w-[83px] md:h-[46px] sm:w-[92px] sm:h-[51px] w-[54px] h-8 px-2 py-2  md:py-6 md:px-5 rounded-[8px] sm:rounded-[10px] md:rounded-[18px]  border-1 flex justify-center items-center shadow-[0px_3px_14px_0px_rgba(74,58,255,0.03),0px_-2px_4px_0px_rgba(20,20,43,0.02),0px_12px_24px_0px_rgba(20,20,43,0.04)] bg-white dark:bg-[#1D3B9D]`}>
                  <img
                    src={logo}
                    alt={`Customer logo ${index + 1}`}
                    className={`h-7 md:h-8 object-contain ${
                      index === 16 ? "h-18 md:h-20" : ""
                    }`}
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
