import CodeHighlighter from "../../../partials/CodeHighlighter";

const Header = () => {
  return (
    <section
      className="flex flex-col justify-center items-center 2xl:h-[1000px] xl:h-[850px] lg:h-[800px] md:h-[662px] sm:h-[700px] h-[630px]
    w-full  bg-cover bg-center relative bg-no-repeat py-16 md:py-20 bg-[url(https://res.cloudinary.com/acceptify/image/upload/v1735800494/components/developers_header/bg_light.png)]">
      <div className="absolute dark:hidden -top-72 -left-64 sm:-top-64 sm:-left-32 w-[376px] h-[376px] bg-white rounded-full blur-3xl z-0" />
      <div className="absolute hidden dark:block -top-64 -left-32 w-[376px] h-[376px] bg-[#431C95] rounded-full blur-3xl z-0" />
      <div className="xl:w-[893px] lg:w-[772px] md:w-[632px] z-10 sm:w-[486px] w-[288px] flex flex-col justify-center items-center gap-5 mb-4 md:mb-8">
        <h1 className="text-white font-semibold px-2 text-center xl:w-[893px] lg:w-[772px] md:w-[636px] w-[288px] sm:w-[433px]  capitalize">
          Worldwide secure processing with a few lines of code
        </h1>
        <p className="text-white  2xl:w-[879px] xl:w-[658px] lg:w-[580px] md:w-[620px] sm:w-[433px] text-center">
          Empower your creativity with Acceptify, a cutting-edge coding tool
          inspired by simplicity and efficiency unleash the full potential of
          your projects.
        </p>
      </div>
      <div className="xl:w-[893px] lg:w-[772px] md:w-[620px]  sm:w-[486px] flex flex-col justify-center items-center">
        <CodeHighlighter />
      </div>
      <div className="flex flex-col justify-center items-center mt-4 md:mt-8">
        <p className="lg:text-[18px] text-white">Available in</p>
        <div className="flex mt-3 justify-center items-center gap-4">
          <img
            src="https://res.cloudinary.com/acceptify/image/upload/v1735887831/components/developers_header/ios_icon.svg"
            alt="ios_icon"
            className="h-4 w-4 md:h-10 md:w-10"
          />
          <img
            src="https://res.cloudinary.com/acceptify/image/upload/v1735887865/components/developers_header/android_icon.svg"
            alt="android_icon"
            className="h-4 w-4 md:h-10 md:w-10"
          />
          <img
            src="https://res.cloudinary.com/acceptify/image/upload/v1735887788/components/developers_header/windows_icon.svg"
            alt="windows_icon"
            className="h-4 w-4 md:h-10 md:w-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
