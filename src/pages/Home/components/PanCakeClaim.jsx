import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const videoData = [
  {
    url: "https://res.cloudinary.com/dq5guzzge/video/upload/v1733214865/components/pancake_one.webm",
    title: "Protect your Customers and your Reputation with Acceptify",
    subtitle:
      "Acceptify is designed to meet the stringent security standards of the Payment Card Industry's Data Security Standard (PCI-DSS). Customer's data is always strongly encrypted.",
    highlightedWords: ["Protect your", "Customers"],
  },
  {
    url: "https://res.cloudinary.com/dq5guzzge/video/upload/v1733214909/components/pancake_two.webm",
    title: "Protect your Operation and Reputation",
    subtitle:
      "Acceptify protects against harmful security breaches that negatively impact your brand, disrupts your operations, increases your liabilities and decreases your revenue.",
    highlightedWords: ["Operation", "and", "Reputation"],
  },
  {
    url: "https://res.cloudinary.com/dq5guzzge/video/upload/v1733214956/components/pancake_three.webm",
    title:
      "Acceptify is PCI-P2PE Certified ensuring Compliance to the industry's highest standard.",
    subtitle:
      "Acceptify's PCI P2PE (Point-to-Point Encryption) certification ensures compliance to PCI-DSC's (Payment Card Industry Security Standards Council) highest security standards.",
    highlightedWords: ["PCI-P2PE Certified"],
  },
  {
    url: "https://res.cloudinary.com/dq5guzzge/video/upload/v1733214991/components/pancake_four.webm",
    title: "Acceptify Simplifying PCI Security Compliance",
    subtitle:
      "Acceptify's encryption of cardholder data removes it from scope for many PCI DSS requirements, as a result your PCI audit effort is greatly reduced.",
    highlightedWords: ["Simplifying", "PCI Security Compliance"],
  },
  {
    url: "https://res.cloudinary.com/dq5guzzge/video/upload/v1732532264/components/code_snippet.webm",
    title: "Implement Ultra-Secure Payments with a few Lines of Code",
    subtitle:
      "We've done all the heavy lifting for you. Use the Acceptify's APIs to connect to a payment device.",
    highlightedWords: ["Ultra-Secure Payments"],
  },
  {
    url: "https://res.cloudinary.com/dq5guzzge/video/upload/v1732531637/components/lightning_fast.webm",
    title: "Lightning Fast Payments",
    subtitle:
      "Enterprises that need speedy payments choose Acceptify. Our payment technologies are designed around 'No More Spinners.'",
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
        <div ref={containerRef} className=" hidden lg:flex lg:gap-32 mx-10">
          {" "}
          <div className="w-1/3">
            {" "}
            {videoData.map((item, index) => (
              <div
                key={index}
                className="content-section w-full min-h-screen flex items-center justify-center">
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
          <div className="w-2/3 relative">
            {" "}
            <div className="video-container sticky top-0 h-screen flex items-center justify-center">
              {" "}
              <video
                ref={videoRef}
                src={videoData[currentVideoIndex].url}
                className="w-full h-auto max-h-full object-contain"
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
