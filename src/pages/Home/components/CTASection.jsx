const CTASection = () => {
  return (
    <div className="container">
      <div className="md:px-10 md:py-20 xl:p-20  ">
        <div className="flex bg-gradient-to-br from-[#6E3BFB] to-[#3479FD] dark:bg-gradient-to-r dark:from-[#200B49] dark:to-[#1646A7]  overflow-hidden rounded-xl">
          <div className="w-full md:w-1/2 flex items-center my-10 px-5  sm:px-8 md:px-20 rounded-xl ">
            <div>
              <h2 className="xl:text-[32px]/[32px] font-bold text-white">
                Ready to get Started?
              </h2>
              <p className="text-[12px]/[175%] sm:[16px]/[175%] mt-3 text-white">
                See how Acceptify brings the ease of implementation and peace of
                mind of a fully certified payments platform. Get in touch with
                our experts now!
              </p>
              <button className="text-[9.6px]/[13px] sm:[11px]/[16.5px] md:text-[14px]/[20px] lg:text-[11px]/[16.5px] xl:text-[13px]/[19px] 2xl:text-[16px]/[24px] mt-5 bg-primary hover:bg-[#51A805] rounded-lg py-[5px] px-[9px] text-white ">
                Contact an Expert
              </button>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <video className="w-full h-full object-cover " autoPlay loop muted>
              <source src="/assets/CTA/half_vid_v2.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
