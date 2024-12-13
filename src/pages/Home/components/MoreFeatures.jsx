const MoreFeatures = () => {
  const features = [
    {
      title: "Smart Transaction",
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1733919671/components/smart_transaction.png",
      description:
        "Acceptify allows you to ‘tag’ transactions with fully customizable meta-data relevant to your business. This enables more efficient categorization and searchability for greater insight and reporting.",
    },
    {
      title: "Recapture Engine",
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1733919815/components/recapture_engine.png",
      description:
        "We help you increase lost revenue from declined offline transactions. Our powerful recapture engine resubmits declined transactions until they are approved or expire.",
    },
    {
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1733919425/components/configurable_data.png",
      title: "Configurable Data",
      description:
        "Add relevant, searchable data to each transaction. An order number, parking lot ID, flight number, event name - whatever is important to you and your customer.",
    },
    {
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1733919376/components/global_payments.png",
      title: "Enterprise Payments Anywhere",
      description:
        "We are a true enterprise payment solution. We enable you to take local payments in nearly all worldwide currencies. Bring you own processors or we can help you select one.",
    },
    {
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1733919324/components/beautiful_branding.png",
      title: "Accept Cards/Wallets",
      description:
        "Swipe, tap or insert. Acceptify safely accepts electronics payments whether your customers choose credit cards or e-wallets to run transactions.",
    },
    {
      src: "https://res.cloudinary.com/dq5guzzge/image/upload/v1733919170/components/increased_revenue.png",
      title: "Increase Revenue",
      description:
        "Boost your revenue by using your own processor and customized rates. Maximize earnings by processing transactions anytime, anywhere—even without service.",
    },
  ];

  return (
    <section className="morefeatures w-full h-full">
      <div className="container ">
        <div className="md:mx-10 lg:mx-[60px] xl:mx-20 py-20">
          <h1 className="text-center font-semibold mb-6 dark:text-white ">
            Loaded with More Features
          </h1>

          <div className="grid grid-cols-3  gap-5 max-w-full">
            {features.map((item, index) => (
              <div
                className="morefeatures__card parent-container lg:px-2 lg:py-4 xl:p-4 2xl:p-6 bg-white dark:bg-[#05122C] dark:border-[#3479FD] relative rounded-[20px] border border-spacing-1 border-[#9EC1FF] 2xl:w-[444px] 2xl:h-[406px] xl:w-[316px] xl:h-[344px] lg:w-[269px] lg:h-[293px] overflow-hidden"
                key={index}>
                <div className="absolute -top-48 dark:-top-56 -left-28 morefeatures__topGradient"></div>

                <div className="relative flex flex-col items-center h-full justify-between z-10">
                  <h3 className=" text-center relative z-10 dark:text-white">
                    {item.title}
                  </h3>
                  <img
                    className={` mx-auto morefeatures__card-img${index} dark:text-white  max-w-full relative z-10`}
                    src={item.src}
                    alt={item.title}
                  />
                  <p className="morefeatures__card-description dark:text-white text-center relative z-10">
                    {item.description}
                  </p>
                </div>

                <div className="absolute -bottom-52 -right-36 dark:hidden morefeatures__bottomGradient"></div>
                <div className="absolute -bottom-48 -right-56">
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
    </section>
  );
};

export default MoreFeatures;
