import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FeatureCard = ({ title, description, icon, isLarge = false }) => (
  <div
    className={`
      relative group
      before:absolute before:inset-0
      before:bg-gradient-to-br
      before:from-white/20
      before:via-white/10
      before:to-transparent
      before:rounded-xl
      backdrop-blur-sm
      bg-white/[0.1]
      rounded-xl
      overflow-hidden
      pt-7 px-5
    ${isLarge ? "md:col-span-2" : "md:col-span-1"}`}>
    <div className="flex flex-col h-full ">
      <h3 className="text-[24px] max-w-[75%] text-white bg-transparent font-semibold mb-2 ">
        {title}
      </h3>
      {description && (
        <p className="text-[17.8px] text-gray-200 mb-4">{description}</p>
      )}
      {isLarge ? (
        <div className="w-full h-[280px]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            controlsList="nodownload" // Prevents download option in controls
            disablePictureInPicture // Disables picture-in-picture mode
            playsInline // Better mobile experience
            onContextMenu={(e) => e.preventDefault()}>
            <source
              src="/assets/featuregrid/accept_wristbands_v2.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="flex-grow flex items-center justify-center mt-4">
          <img
            src={icon || "/api/placeholder/300/200"}
            alt="placeholder"
            className="object-contain h-52 w-full"
          />
        </div>
      )}
    </div>
  </div>
);

const FeaturesGrid = () => {
  const features = [
    {
      title:
        "Accept Wristbands! Unparalleled Speed & Satisfaction for Events and Venues.",
      icon: "/assets/featuregrid/wristbands.png",
      isLarge: true,
    },
    {
      title: "Enterprise payments anywhere",
      icon: "/assets/featuregrid/global_payments.png",
      description:
        "We are a true enterprise payment solution. We enable you to take local payments in nearly all worldwide currencies. Bring your own processors or we can help you select one.",
    },
    {
      title: "Accept Cards/Wallets",
      icon: "/assets/featuregrid/accept_cards.png",
      description:
        "Swipe, tap or insert. Acceptify safely accepts electronic payments whether your customers choose credit cards or e-wallets to run transactions.  ",
    },
    {
      title: "Configurable Data",
      icon: "/assets/featuregrid/configurable_data.png",
      description:
        "Add relevant, searchable data to each transaction. An order number, parking lot ID, flight number, event name – whatever is important to you and your customer.",
    },
    {
      title: "Recapture Engine",
      icon: "/assets/featuregrid/recapture_engine.png",
      description:
        "We help you increase lost revenue from declined offline transactions. Our powerful recapture engine resubmits declined transactions until they are approved or expire.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="pb-24 bg-gradient-to-r from-[#6E3BFB] to-[#2D79FF] ">
      <h2 className="text-[52px] text-white font-bold text-center py-20">
        Loaded with More Features
      </h2>

      <div className="block md:hidden mx-10">
        <Slider {...settings}>
          {features.map((feature, index) => (
            <CarouselItem key={index} {...feature} />
          ))}
        </Slider>
      </div>
      <div className="hidden md:block mx-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;

const CarouselItem = ({ title, description, image }) => (
  <div className="carousel-item">
    <div className="carousel-item-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className="carousel-item-image">
      <img src={image} alt={title} />
    </div>
  </div>
);
