import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
const videoData = [
  {
    url: "https://res.cloudinary.com/dq5guzzge/video/upload/v1733817486/components/still_pancake_01.webm",
    title: "Secure, Certified, Lightning Fast Enterprise Payments Anywhere",
    subtitle:
      "Acceptify is designed to meet the stringent security standards of the Payment Card Industry's Data Security Standard (PCI-DSS). Customer's data is always strongly encrypted.",
    highlightedWords: ["Secure,", "Certified,", "Lightning Fast"],
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
      "Acceptify is PCI-P2PE Certified Ensuring Compliance to the Industry Highest Standard",
    subtitle:
      "Acceptify's PCI P2PE (Point-to-Point encryption) certification ensures compliance to PCI-SSC's (Payment Card Industry Security Standards Council) highest security standards. Certified Tamperproof Hardware encrypts data from the point of capture which is then processed by Acceptify’s PCI-DSS compliant platform. Audited annually by an external qualified security assessor (QSA) to ensure compliance to latest standards.",
    highlightedWords: ["PCI-P2PE Certified"],
  },
  {
    url: "https://res.cloudinary.com/dq5guzzge/video/upload/v1733817659/components/still_pancake_04.webm",
    title:
      "Acceptify Simplifying PCI Security Compliance for Online and Offline Payments",
    subtitle:
      "Acceptify’s encryption of cardholder data removes it from scope for many PCI DSS requirements, as a result your PCI audit effort is greatly reduced making compliance audits simpler and less costly.",
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
      "Enterprises that need speedy payments choose Acceptify.  Our payment technologies are designed around “No More Spinners”. Spinners are painful when customers are waiting. Acceptify helps you succeed in high throughput payment workflows where speed matters.",
    highlightedWords: ["Lightning Fast Payments"],
  },
];
const VideoScrollComponent = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const svgRef = useRef(null); // Ref for the SVG
  const pathRef = useRef(null); // Ref for the SVG
  const swishLogoRef = useRef(null); // Ref for the Swish logo
  const svgWrapperRef = useRef(null); // New wrapper ref
  const svgInnerWrapperRef = useRef(null); // Inner wrapper ref

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    const svgElement = svgRef.current; // Access the SVG element
    let prevProgress = 0; // Track previous scroll progress

    const swishLogo = swishLogoRef.current; // Access the Swish logo element

    const sections = gsap.utils.toArray(".content-section");
    let mm = gsap.matchMedia();
    // 🌀 Animate the SVG's Y position based on scroll
    // Pin the svgWrapperRef to keep it fixed during scroll

    const rocket = svgRef.current;
    const path = pathRef.current.querySelector("path");
    console.log(path);

    // Create the motion path animation
    gsap.to(rocket, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      x: window.innerWidth,
      duration: 1, // Increased duration for slower movement
      repeat: -1, // Infinite repeat
      ease: "none", // Linear movement
      // yoyo: true, // Move back and forth along the path
    });

    // ScrollTrigger.create({
    //   trigger: container,
    //   start: "top top",
    //   end: "bottom bottom",
    //   pin: svgWrapperRef.current,
    //   pinSpacing: false,
    // });

    // // Animate the SVG horizontally based on scroll progress
    // gsap.to(svgElement, {
    //   x: () => {
    //     const containerWidth = container.offsetWidth;
    //     const svgWidth = svgElement.offsetWidth;
    //     return containerWidth - svgWidth;
    //   },
    //   y: gsap.getProperty(svgElement, "y"),

    //   scrollTrigger: {
    //     trigger: container,
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: true,
    //     onUpdate: (self) => {
    //       const progress = self.progress;
    //       const rotation = progress > prevProgress ? 10 : 190;

    //       // Apply rotation without changing y-position
    //       gsap.set(svgElement, {
    //         rotation: rotation,
    //         y: gsap.getProperty(svgElement, "y"), // Lock Y position
    //         x: gsap.getProperty(svgElement, "x"), // Preserve X position
    //         // Keep y fixed to prevent vertical movement
    //       });

    //       prevProgress = progress;
    //     },
    //   },
    //   ease: "none",
    // });

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        pin: swishLogo,
        pinSpacing: false,
      });

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
    <section className="dark:bg-[#06142F] relative overflow-hidden">
      <div
        className="absolute opacity-100 -top-[1000px]  -left-[200px] transform  rotate-[235deg] z-0 w-[1200px] h-[1581px] bg-cover bg-no-repeat"
        ref={swishLogoRef} // Add ref to the Swish logo div
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dq5guzzge/image/upload/v1734076580/components/swish_logo.png')`,
          backgroundSize: "100%",
          transform: "rotate(180deg)", // This rotates the background image itself

          opacity: 0.5, // Optional: adjust opacity if needed
        }}></div>

      <div className="container relative">
        <div className="absolute top-32 z-0 w-full h-16" ref={svgWrapperRef}>
          {/* Add another wrapper div */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 1000"
            id="path"
            ref={pathRef}>
            <g>
              <path
                style={{
                  stroke: "rgb(0, 0, 0)",
                  fill: "none",
                  strokeWidth: "0.1", // Thin line
                }}
                d="M 0 500 C 0 500 134.327 404.218 101.622 282.156 C 68.915 160.095 63.659 158.342 105.709 165.35 C 147.759 172.358 200.322 219.665 200.322 219.665 C 200.322 219.665 361.515 353.408 420.502 185.207 C 479.488 17.008 478.32 32.187 495.257 15.835"></path>
            </g>
          </svg>

          <div className="w-16 h-16" ref={svgRef}>
            <img
              className="w-full h-full transform rotate-12"
              src="https://res.cloudinary.com/dq5guzzge/image/upload/v1734090001/components/rocket_svg.svg"
              alt=""
              // style={{ transition: "transform 0.3s ease-out" }}
            />
          </div>
        </div>

        <div className="block lg:hidden mt-[60px] mx-10">
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
          className=" hidden lg:flex lg:relative justify-center lg:gap-[182px] lg:mx-10 xl:mx-20">
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
