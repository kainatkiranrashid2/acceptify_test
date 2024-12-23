import React from "react";

const DevicesSection = () => {
  const devices = [
    {
      heading: "QPixel 600",
      points: [
        "Highly dependable. Google tablets with Tensor G2 chipset",

        "Readily available for ANY size deployment",
        "Dockable and detachable payment device for any workflow",
      ],
      webMVideo:
        "https://res.cloudinary.com/dq5guzzge/video/upload/v1734976126/components/devices_devices_section/qpixel_device.webm",
      hevcVideo:
        "https://res.cloudinary.com/dq5guzzge/video/upload/v1734945528/components/devices_devices_section/qpp_600_device.webm",
    },
    {
      heading: "QPP 451",
      points: [
        "PIN entry keypad",

        "Bluetooth low energy interface simplifies pairing to Android, iOS and Windows",
        "Contact and contactless payment interfaces, with optional magnetic stripe reader",
      ],
      webMVideo:
        "https://res.cloudinary.com/dq5guzzge/video/upload/v1734976455/components/devices_devices_section/qpp_451_device.webm",
      hevcVideo:
        "https://res.cloudinary.com/dq5guzzge/video/upload/v1734945528/components/devices_devices_section/qpp_600_device.webm",
    },
    {
      heading: "QPP 600",
      points: [
        "Countertop or mobile pin entry device with printer.",

        "Contact, Contactless & MSR payments with PIN entry keypad.",
        "48mm printer, ideal when printed receipts are a fiscal requirement.",
      ],
      webMVideo:
        "https://res.cloudinary.com/dq5guzzge/video/upload/v1734976382/components/devices_devices_section/qpp_600_device.webm",
      hevcVideo:
        "https://res.cloudinary.com/dq5guzzge/video/upload/v1734945528/components/devices_devices_section/qpp_600_device.webm",
    },
    {
      heading: "QPR",
      points: [
        "Compact and light weight",
        "Bluetooth low energy interface simplifies pairing to Android, iOS and Windows",
        "Contact and contactless payment interfaces, with optional magnetic stripe reader",
      ],
      webMVideo:
        "https://res.cloudinary.com/dq5guzzge/video/upload/v1734976201/components/devices_devices_section/qpr_device.webm",
      hevcVideo:
        "https://res.cloudinary.com/dq5guzzge/video/upload/v1734945528/components/devices_devices_section/qpp_600_device.webm",
    },
    {
      heading: "QPP Pro",
      points: [
        "Android purpose-built payment device",
        "SRED certified ensures that cardholder account data is protected",
        "Contact & Contactless payment interfaces, with on screen PIN entry",
      ],
      webMVideo:
        "https://res.cloudinary.com/dq5guzzge/video/upload/v1734976305/components/devices_devices_section/qpp_device.webm",
      hevcVideo:
        "https://res.cloudinary.com/dq5guzzge/video/upload/v1734945528/components/devices_devices_section/qpp_600_device.webm",
    },
    {
      heading: "QPP Pro Plus",
      points: [
        "Color touch screen.",
        "Built in receipt printer.",
        "Android “all in one” payment device with contact, contactless, magnetic swipe reader and on-screen PIN entry.",
      ],
      webMVideo:
        "https://res.cloudinary.com/dq5guzzge/video/upload/v1734976247/components/devices_devices_section/qpp_pro_device.webm",
      hevcVideo:
        "https://res.cloudinary.com/dq5guzzge/video/upload/v1734945528/components/devices_devices_section/qpp_600_device.webm",
    },
  ];
  return (
    <section className="bg-[#EBEBEB] dark:bg-[#05122C]">
      <div className="container">
        <div className="py-20">
          <div className="flex flex-col justify-center items-center gap-4 mb-[80px]">
            <h1 className="text-center font-semibold dark:text-white">
              Simple, Easy Payments
            </h1>
            <p className="text-center dark:text-white">
              Building a business is hard. Getting paid shouldn&apos;t be.
            </p>
          </div>
          {devices.map((device, index) => (
            <div
              className={`mx-auto mb-20 px-[60px] py-[30px] rounded-2xl items-center 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] bg-white dark:bg-gradient-to-l ${
                index % 2 === 0
                  ? "dark:from-[#1D3B9D] dark:to-[#0C0221] "
                  : " dark:from-[#1D3B9D] dark:to-[#0C0221]"
              }`}
              key={index}>
              <div className="mx-auto 2xl:w-[960px] xl:w-[880px] lg:w-[680px] ">
                <div className="w-full mx-auto">
                  <div
                    key={device.heading}
                    className={`flex  ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } 
            items-center gap-8 devices__card`}>
                    <div className={`devices__card-vid${index}  `}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-contain">
                        <source src={device.webMVideo} type="video/webm" />
                        <source src={device.hevcVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>

                    <div className="w-full md:flex-1 space-y-0">
                      <p className="text-[#635BFF] xl:text-[16px] lg:text-[12px]  ">
                        Unified platform
                      </p>
                      <h1 className="dark:text-white">{device.heading}</h1>
                      <ul className="space-y-1 	">
                        {device.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start space-x-2 devices__card-description ">
                            <span className="inline-block w-1.5 h-1.5 mt-[10px] rounded-full bg-black flex-shrink-0 dark:bg-white" />
                            <span className="text-black dark:text-white">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevicesSection;
