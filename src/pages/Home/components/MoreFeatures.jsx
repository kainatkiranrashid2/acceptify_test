import Slider from "react-slick";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

// https://res.cloudinary.com/dq5guzzge/image/upload/v1734514243/components/more_features/chevro_right_light.svg

function customPaging(i) {
  return (
    <span className="">
      <div className="mt-5 h-1 w-2 px-2 rounded-md bg-[#DEDEDE]"></div>
    </span>
  );
}

function appendDots(dots) {
  return (
    <div style={{}}>
      <ul style={{ margin: "4px" }}> {dots} </ul>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick, currentSlide } = props;
  if (currentSlide === 0) {
    return null;
  }
  return (
    <div
      style={{ ...style }}
      onClick={onClick}
      className="absolute -left-4 top-[40%] z-10 bg-gray">
      <img
        src="https://res.cloudinary.com/dq5guzzge/image/upload/v1734514251/components/more_features/chevron_left_light.svg"
        alt=""
        className="block dark:hidden "
      />
      <img
        src="https://res.cloudinary.com/dq5guzzge/image/upload/v1734515439/components/more_features/chevron_dark_mode.svg"
        alt=""
        className="hidden dark:block transform rotate-180"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, currentSlide, slideCount } = props;
  if (currentSlide === slideCount - 1) {
    return null;
  }

  return (
    <div
      style={{ ...style }}
      onClick={onClick}
      className="absolute -right-4 rounded-full top-[40%]  z-10 ">
      <img
        src="https://res.cloudinary.com/dq5guzzge/image/upload/v1734514243/components/more_features/chevro_right_light.svg"
        alt=""
        className="block dark:hidden"
      />
      <img
        src="https://res.cloudinary.com/dq5guzzge/image/upload/v1734515439/components/more_features/chevron_dark_mode.svg"
        alt=""
        className="hidden dark:block"
      />
    </div>
  );
}

const CarouselItem = ({ title, description, image, id }) => (
  <div className="morefeatures__card parent-container px-3 py-4  bg-white dark:bg-[#05122C] dark:border-[#3479FD] relative rounded-[20px] border border-spacing-1 border-[#9EC1FF]  w-[280px] h-[293px] sm:[280px]  overflow-hidden flex flex-col items-center  justify-between  ">
    <div className="absolute -top-48 dark:-top-56 -left-28 morefeatures__topGradient"></div>

    <div className="carousel-item-content">
      <h3 className="text-center relative z-10 dark:text-white">{title}</h3>
    </div>
    <div
      className={`carousel-item-image mx-auto morefeatures__card-img${id} dark:text-white  max-w-full relative z-10 my-5`}>
      <img
        className={` mx-auto morefeatures__card-img${id} dark:text-white  max-w-full relative z-10`}
        src={image}
        alt={title}
      />
    </div>
    <div className="carousel-item-content">
      <p className="morefeatures__card-description dark:text-white text-center relative z-10">
        {description}
      </p>
    </div>

    <div className="absolute -bottom-52 -right-36 block dark:hidden morefeatures__bottomGradient"></div>
    <div className="hidden dark:block absolute -bottom-48 -right-56">
      <div className="gradient-container">
        <div className="circle"></div>
        <div className="oval-1"></div>
        <div className="oval-2"></div>
      </div>
    </div>
  </div>
);

const MoreFeatures = () => {
  const features = [
    {
      id: 0,
      title: "Smart Transaction",
      image:
        "https://res.cloudinary.com/dq5guzzge/image/upload/v1733919671/components/smart_transaction.png",
      description:
        "Acceptify allows you to ‘tag’ transactions with fully customizable meta-data relevant to your business. This enables more efficient categorization and searchability for greater insight and reporting.",
    },
    {
      id: 1,
      title: "Recapture Engine",
      image:
        "https://res.cloudinary.com/dq5guzzge/image/upload/v1733919815/components/recapture_engine.png",
      description:
        "We help you increase lost revenue from declined offline transactions. Our powerful recapture engine resubmits declined transactions until they are approved or expire.",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dq5guzzge/image/upload/v1733919425/components/configurable_data.png",
      title: "Configurable Data",
      description:
        "Add relevant, searchable data to each transaction. An order number, parking lot ID, flight number, event name - whatever is important to you and your customer.",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dq5guzzge/image/upload/v1733919376/components/global_payments.png",
      title: "Enterprise Payments Anywhere",
      description:
        "We are a true enterprise payment solution. We enable you to take local payments in nearly all worldwide currencies. Bring you own processors or we can help you select one.",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dq5guzzge/image/upload/v1733919324/components/beautiful_branding.png",
      title: "Accept Cards/Wallets",
      description:
        "Swipe, tap or insert. Acceptify safely accepts electronics payments whether your customers choose credit cards or e-wallets to run transactions.",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dq5guzzge/image/upload/v1733919170/components/increased_revenue.png",
      title: "Increase Revenue",
      description:
        "Boost your revenue by using your own processor and customized rates. Maximize earnings by processing transactions anytime, anywhere—even without service.",
    },
  ];
  const settingsForSm = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
    customPaging: customPaging,
    appendDots: appendDots,
  };
  const settingsForXS = {
    dots: true,
    // infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
    customPaging: customPaging,
    appendDots: appendDots,
  };

  return (
    <section className="morefeatures w-full h-full">
      <div className="container ">
        <div className="md:mx-4 lg:mx-[60px] xl:mx-20 py-20">
          <h1 className="text-center font-semibold mb-6 dark:text-white ">
            Loaded with More Features
          </h1>

          <div className="hidden sm:block md:hidden mx-10">
            <Slider {...settingsForSm} className="relative">
              {features.map((feature, index) => (
                <CarouselItem key={index} {...feature} />
              ))}
            </Slider>
          </div>
          <div className="block sm:hidden mx-10">
            <Slider {...settingsForXS} className="relative w-full">
              {features.map((feature, index) => (
                <CarouselItem key={index} {...feature} />
              ))}
            </Slider>
          </div>
          <div className="hidden md:flex ">
            <div className="grid grid-cols-3  gap-5 max-w-full items-center justify-center mx-auto">
              {features.map((item, index) => (
                <div
                  className="morefeatures__card parent-container md:px-3 md:py-3 lg:px-2 lg:py-4 xl:p-4 2xl:p-6 bg-white dark:bg-[#05122C] dark:border-[#3479FD] relative rounded-[20px] border border-spacing-1 border-[#9EC1FF] 2xl:w-[444px] 2xl:h-[406px] xl:w-[316px] xl:h-[344px] lg:w-[269px] lg:h-[293px] md:w-[196px] md:h-[230px] overflow-hidden"
                  key={index}>
                  <div className="absolute -top-48 dark:-top-56 -left-28 morefeatures__topGradient"></div>

                  <div className="relative flex flex-col items-center h-full justify-between z-10">
                    <h3 className=" text-center relative  dark:text-white">
                      {item.title}
                    </h3>
                    <img
                      className={` mx-auto morefeatures__card-img${index} dark:text-white  max-w-full relative `}
                      src={item.image}
                      alt={item.title}
                    />
                    <p className="morefeatures__card-description dark:text-white text-center relative ">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute -bottom-52 -right-36 block dark:hidden morefeatures__bottomGradient"></div>
                  <div className="hidden dark:block absolute -bottom-48 -right-56">
                    <div className="gradient-container">
                      <div className="circle"></div>
                      <div className="oval-1"></div>
                      <div className="oval-2"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreFeatures;
