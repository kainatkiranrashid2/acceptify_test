import React from "react";

const OurCustomers = () => {
  const logos = [
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733947346/components/our_customers/google_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733946389/components/our_customers/apple_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733946345/components/our_customers/samsung_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733946244/components/our_customers/googleplay_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733946205/components/our_customers/visa_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733946541/components/our_customers/discover_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733946069/components/our_customers/jcb_logo.svg",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733947207/components/our_customers/americanexpress_logo.png",

    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733946023/components/our_customers/unionpay_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733946505/components/our_customers/mastercard_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733945983/components/our_customers/evo_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733945943/components/our_customers/worldpay_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733945888/components/our_customers/chase_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733946832/components/our_customers/fiserv_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733945645/components/our_customers/elavon_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733945477/components/our_customers/freedompay_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733945388/components/our_customers/globalpayments_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733945338/components/our_customers/ace_parking_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733945285/components/our_customers/garuda_logo.png",

    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733945213/components/our_customers/kaiser_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733945167/components/our_customers/alaska_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733945121/components/our_customers/fiji_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733945056/components/our_customers/suncountry_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733945002/components/our_customers/scripps_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733944952/components/our_customers/ticketmaster_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733946740/components/our_customers/nfl_logo.png",

    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733944879/components/our_customers/omni_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733944836/components/our_customers/mai_logo.png",
    "https://res.cloudinary.com/dq5guzzge/image/upload/v1733944784/components/our_customers/air_tanzania.png",
  ];
  return (
    <section>
      <div className="container">
        <div className="2xl:mx-[160px] xl:mx-8 md:mx-10 py-20 relative">
          {/* <div className="absolute oval-shape -left-20 -top-4  "></div> */}
          {/* <div className="absolute oval-shape left-96 -top-4  "></div> */}

          <div className="grid grid-cols-6 items-center justify-center gap-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`xl:w-[182px]  xl:!h-[100px] py-6 px-5 rounded-[18px]  border-1 flex justify-center items-center shadow-[0px_3px_14px_0px_rgba(74,58,255,0.03),0px_-2px_4px_0px_rgba(20,20,43,0.02),0px_12px_24px_0px_rgba(20,20,43,0.04)] 

                md:w-[120px] md:h-[66px]

                bg-white`}>
                <img
                  src={logo}
                  alt={`Customer logo ${index + 1}`}
                  className="h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCustomers;
