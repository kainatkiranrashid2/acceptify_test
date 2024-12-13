const CTASection = () => {
  return (
    <div className="container">
      <div className="md:px-10 md:py-20 xl:p-20  ">
        <div className="flex bg-gradient-to-br from-[#6E3BFB] to-[#3479FD] overflow-hidden rounded-xl">
          <div className="w-1/2 flex items-center  px-20 rounded-xl ">
            <div>
              <h2 className="xl:text-[32px]/[32px] font-bold text-white">
                Ready to get Started?
              </h2>
              <p className="text-[18px]/[27px] mt-3 text-white">
                See how Acceptify brings the ease of implementation and peace of
                mind of a fully certified payments platform. Get in touch with
                our experts now!
              </p>
              <button className="md:text-[14px]/[20px] lg:text-[11px]/[16.5px] xl:text-[13px]/[19px] 2xl:text-[16px]/[24px] mt-5 bg-primary rounded-lg py-[10px] px-[14px] text-white ">
                Contact an Expert
              </button>
            </div>
          </div>
          <div className="w-1/2">
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
