import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircleChevronLeft,
} from "react-icons/fa6";

const FeatureCard = ({ icon, title, description, style, className }) => (
  <div style={style} className={className}>
    {/* Background with masks */}
    <div className="absolute inset-0 rounded-lg overflow-hidden">
      {/* Black base background */}
      <div className="absolute inset-0 bg-black"></div>
      {/* Mask overlays */}
      <div className="absolute inset-0 w-[160%] h-[160%]">
        <img
          src="/assets/morefeatures/gradient.png"
          alt="Gradient Background"
          className="absolute w-full h-full opacity-80  -left-1/4 -top-1/3 object-cover origin-center rotate-60"
        />
      </div>

      <img
        src="/assets/morefeatures/mask_pattern.png"
        alt="Background Mask 1"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
    </div>

    {/* Original content layout unchanged */}
    <div className="relative z-10 px-6 pb-[44px] pt-[40px]">
      <div className="w-[328px] h-[328px] mx-auto aspect-square mb-4">
        {icon}
      </div>
      <h3 className="text-[32px]/[40px] font-bold text-white mb-2">{title}</h3>
      <p className="text-white text-lg">{description}</p>
    </div>
  </div>
);

const FeatureCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const features = [
    {
      icon: (
        <img
          src="/assets/morefeatures/accept_wristbands.png"
          alt="Accept Wristbands"
        />
      ),
      title: "Smart Transaction",
      description:
        "Acceptify allows you to ‘tag’ transactions with fully customizable meta-data relevant to your business. This enables more efficient categorization and searchability for greater insight and reporting.",
    },
    {
      src: "/assets/morefeatures/accept_cards.png",
      title: "Recapture Engine",
      description:
        "We help you increase lost revenue from declined offline transactions. Our powerful recapture engine resubmits declined transactions until they are approved or expire.",
    },
    {
      src:"/assets/morefeatures/configurable_data.png"
      title: "Configurable Data",
      description:
        "Add relevant, searchable data to each transaction. An order number, parking lot ID, flight number, event name - whatever is important to you and your customer.",
    },
    {
      src:"/assets/morefeatures/global_payments.png"
      ,
      title: "Enterprise Payments Anywhere",
      description:
        "We are a true enterprise payment solution. We enable you to take local payments in nearly all worldwide currencies. Bring you own processors or we can help you select one.",
    },
    {
      
      src:"/assets/morefeatures/beautiful_branding.png",
      
      title: "Accept Cards/Wallets",
      description:
        "Swipe, tap or insert. Acceptify safely accepts electronics payments whether your customers choose credit cards or e-wallets to run transactions.",
    },
    {
      icon: (
        <img
          src="/assets/morefeatures/recapture_engine.png"
          alt="Recapture Engine"
        />
      ),
      title: "Increase Revenue",
      description:
        "Boost your revenue by using your own processor and customized rates. Maximize earnings by processing transactions anytime, anywhere—even without service.",
    },
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
      const index = (activeIndex + i) % features.length;
      cards.push({
        ...features[index],
        position: i,
        index,
      });
    }
    return cards;
  };

  const getCardStyle = (position) => {
    const baseStyle = {
      position: "absolute",
      transition: "all 500ms ease-in-out",
    };

    const cardWidth = 32.25; // 30% of container width
    const gap = 0.75; // 3% gap between cards

    const positions = {
      0: {
        left: `${-cardWidth - gap}%`,
        transform: "scale(0.9)",
        opacity: isAnimating ? 0 : 0,
      },
      1: { left: "0%", transform: "scale(0.9)" },
      2: { left: `${cardWidth + gap}%`, transform: "scale(0.9)" },
      3: { left: `${2 * (cardWidth + gap)}%`, transform: "scale(0.9)" },
    };

    if (isAnimating) {
      positions[1] = {
        left: `${-cardWidth - gap}%`,
        transform: "scale(0.9)",
        opacity: 0,
      };
      positions[2] = { left: "0%", transform: "scale(0.9)" };
      positions[3] = { left: `${cardWidth + gap}%`, transform: "scale(0.9)" };
    }

    return {
      ...baseStyle,
      ...positions[position],
      width: `${cardWidth}%`,
    };
  };

  return (
    <div className="bg-black px-[80px] pt-[100px] relative ">
      <div className="flex justify-between items-center mb-8">
        <div className="text-[55px]/[66px] w-[430px] text-white font-bold">
          Loaded with more features
        </div>
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors">
            <FaChevronLeft className="text-black text-xl" />
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors">
            <FaChevronRight className="text-black text-xl" />
          </button>
        </div>
      </div>

      <div className="relative h-[550px] ">
        <div className="absolute h-full inset-0 grid grid-cols-3 ">
          {getVisibleCards().map((card, idx) => (
            <FeatureCard
              key={`${card.title}-${card.index}-${idx}`}
              icon={card.icon}
              title={card.title}
              description={card.description}
              style={getCardStyle(idx)}
              className="reltative  rounded-lg "
            />
          ))}
        </div>
      </div>

      <div className="w-full h-full -mt-10 relative overflow-hidden">
        <img
          src="/assets/morefeatures/features_globe.png"
          alt="Features Globe"
        />
      </div>
    </div>
  );
};

export default FeatureCarousel;
