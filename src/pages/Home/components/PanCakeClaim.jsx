import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const videoData = [
  {
    url: "https://res.cloudinary.com/dq5guzzge/video/upload/v1733817486/components/still_pancake_01.webm",
    title: "Protect your Customers and your Reputation with Acceptify",
    subtitle:
      "Acceptify is designed to meet the stringent security standards of the Payment Card Industry's Data Security Standard (PCI-DSS). Customer's data is always strongly encrypted.",
    highlightedWords: ["Protect your", "Customers"],
  },
  {
    url: "https://res.cloudinary.com/dq5guzzge/video/upload/v1733817549/components/still_pancake_02.webm",
    title: "Protect your Operation and Reputation",
    subtitle:
      "Acceptify protects against harmful security breaches that negatively impact your brand, disrupts your operations, increases your liabilities and decreases your revenue.",
    highlightedWords: ["Operation", "and", "Reputation"],
  },
  {
    url: "https://res.cloudinary.com/dq5guzzge/video/upload/v1733817596/components/still_pancake_03.webm",
    title:
      "Acceptify is PCI-P2PE Certified ensuring Compliance to the industry's highest standard.",
    subtitle:
      "Acceptify's PCI P2PE (Point-to-Point Encryption) certification ensures compliance to PCI-DSC's (Payment Card Industry Security Standards Council) highest security standards.",
    highlightedWords: ["PCI-P2PE Certified"],
  },
  {
    url: "https://res.cloudinary.com/dq5guzzge/video/upload/v1733817659/components/still_pancake_04.webm",
    title: "Acceptify Simplifying PCI Security Compliance",
    subtitle:
      "Acceptify's encryption of cardholder data removes it from scope for many PCI DSS requirements, as a result your PCI audit effort is greatly reduced.",
    highlightedWords: ["Simplifying", "PCI Security Compliance"],
  },
  {
    url: "https://res.cloudinary.com/dq5guzzge/video/upload/v1733898703/components/code_snippet.webm",
    title: "Implement Ultra-Secure Payments with a few Lines of Code",
    subtitle:
      "We’ve done all the heavy lifting for you. Use the Acceptify’s APIs to connect to a payment device, take a payment, submit the transaction to your processor and receive the approval or declined decision – with just a few lines of code.",
    highlightedWords: ["Ultra-Secure Payments"],
    backgroundImage:
      "url('https://res.cloudinary.com/dq5guzzge/image/upload/v1733818098/components/ellipse.svg')", // Replace with your actual image URL
    backgroundStyle: {
      backgroundSize: "cover",
      backgroundPosition: "right bottom", // Positioned to right bottom
      backgroundRepeat: "no-repeat",
      // backgroundColor: "rgba(0,0,0,0.7)", // Optional: add a dark overlay
      backgroundBlendMode: "overlay",
    },
  },
  {
    url: "https://res.cloudinary.com/dq5guzzge/video/upload/v1732531637/components/lightning_fast.webm",
    title: "Lightning Fast Payments",
    subtitle:
      "Enterprises that need speedy payments choose Acceptify. Our payment technologies are designed around “No More Spinners.” Spinners are painful when customers are waiting. Acceptify helps you succeed in high throughput payment workflows where speed matters.",
    highlightedWords: ["Lightning Fast Payments"],
  },
];
const VideoScrollComponent = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    const sections = gsap.utils.toArray(".content-section");
    let mm = gsap.matchMedia();
    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 1024px)", () => {
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(video, {
              opacity: 0,
              duration: 0.5,
              onComplete: () => {
                setCurrentVideoIndex(index);
                gsap.to(video, { opacity: 1, duration: 0.5 });
              },
            });
          },
          onEnterBack: () => {
            gsap.to(video, {
              opacity: 0,
              duration: 0.5,
              onComplete: () => {
                setCurrentVideoIndex(index);
                gsap.to(video, { opacity: 1, duration: 0.5 });
              },
            });
          },
        });
      });
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        pin: ".video-container",
        pinSpacing: false,
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const highlightText = (text, highlightedWords) => {
    if (!text || !highlightedWords) return null;

    let result = text;

    highlightedWords.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi");

      result = result.replace(
        regex,
        '<span class="text-primary font-semibold">$1</span>'
      );
    });

    return (
      <span
        className="font-medium dark:text-white"
        dangerouslySetInnerHTML={{ __html: result }}
      />
    );
  };
  return (
    <section className="dark:bg-[#06142F]">
      <div className="container">
        <div className="block lg:hidden  mt-[60px] mx-10">
          {videoData.map((item, index) => (
            <div className="flex flex-col justify-center  mb-28" key={index}>
              <div className="">
                <h2 className="w-full mb-3">
                  {highlightText(item.title, item.highlightedWords)}
                </h2>
                <p className="dark:text-white">{item.subtitle}</p>{" "}
              </div>
              <div className="w-2/3 mx-auto mt-[5.5rem]">
                <video
                  // ref={videoRef}
                  src={item.url}
                  className="w-full h-auto max-h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          ))}
        </div>
        <div
          ref={containerRef}
          className=" hidden lg:flex justify-center lg:gap-[182px]">
          {" "}
          <div className="lg:w-[384px] xl:w-[430px] 2xl-w-[506px] ">
            {" "}
            {videoData.map((item, index) => (
              <div
                key={index}
                className="content-section w-full min-h-screen flex items-center justify-center ">
                {" "}
                <div className="max-w-xl mx-auto ">
                  {" "}
                  <h2 className="mb-4">
                    {" "}
                    {highlightText(item.title, item.highlightedWords)}
                  </h2>{" "}
                  <p className="dark:text-white">{item.subtitle}</p>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
          <div className="lg:w-[500px] xl:w-[546px] 2xl:w-[688px]  relative ">
            {" "}
            <div className="video-container   sticky top-0 lg:h-[546px] 2xl:h-[790px] flex items-center justify-center">
              {/* <div className="absolute top-10 left-10 testDive bg-black"></div> */}
              {/* <div className="absolute -bottom-10 -right-32 overflow-hidden w-full h-full  z-0  transform rotate-[155deg]">
                <img
                  src="https://res.cloudinary.com/dq5guzzge/image/upload/v1733818098/components/ellipse.svg"
                  className="w-full h-full"
                />
              </div> */}
              <video
                ref={videoRef}
                src={videoData[currentVideoIndex].url}
                className="w-full h-auto max-h-full object-contain z-10"
                autoPlay
                loop
                muted
                playsInline
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </section>
  );
};
export default VideoScrollComponent;
