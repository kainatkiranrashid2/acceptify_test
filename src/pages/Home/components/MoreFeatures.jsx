const MoreFeatures = () => {
  const features = [
    {
      title: "Smart Transaction",
      src: "/assets/morefeatures/global_payments.png",
      description:
        "Acceptify allows you to ‘tag’ transactions with fully customizable meta-data relevant to your business. This enables more efficient categorization and searchability for greater insight and reporting.",
    },
    {
      title: "Recapture Engine",
      src: "/assets/morefeatures/accept_cards.png",
      description:
        "We help you increase lost revenue from declined offline transactions. Our powerful recapture engine resubmits declined transactions until they are approved or expire.",
    },
    {
      src: "/assets/morefeatures/configurable_data.png",
      title: "Configurable Data",
      description:
        "Add relevant, searchable data to each transaction. An order number, parking lot ID, flight number, event name - whatever is important to you and your customer.",
    },
    {
      src: "/assets/morefeatures/global_payments.png",
      title: "Enterprise Payments Anywhere",
      description:
        "We are a true enterprise payment solution. We enable you to take local payments in nearly all worldwide currencies. Bring you own processors or we can help you select one.",
    },
    {
      src: "/assets/morefeatures/beautiful_branding.png",
      title: "Accept Cards/Wallets",
      description:
        "Swipe, tap or insert. Acceptify safely accepts electronics payments whether your customers choose credit cards or e-wallets to run transactions.",
    },
    {
      src: "/assets/morefeatures/recapture_engine.png",
      title: "Increase Revenue",
      description:
        "Boost your revenue by using your own processor and customized rates. Maximize earnings by processing transactions anytime, anywhere—even without service.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#FFFFFF] to-[#9EC1FF] dark:from-[#2E1969]">
      <div className="container ">
        <div className="xl:mx-20 py-20">
          <h1 className="text-center mb-6 ">Loaded with More Features</h1>

          <div className="grid grid-cols-3 gap-5 overflow-hidden max-w-full">
            {features.map((item, index) => (
              <div
                className="text-center p-6  rounded-[20px] border border-spacing-1 border-[#9EC1FF] w-full"
                key={index}>
                <h3>{item.title}</h3>
                <img
                  className="mt-4 mx-auto mb-[6px] xl:h-[9.5rem] xl:w-[10rem] max-w-full"
                  src={item.src}
                  alt={item.title}
                />
                <p className="text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreFeatures;
