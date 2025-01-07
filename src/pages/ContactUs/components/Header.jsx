const Header = () => {
  return (
    <section className="dark:bg-[#06142F]">
      <div className="container">
        <div className="flex justify-between items-center pt-32 xl:mx-20 gap-10">
          <div className="flex flex-col xl:w-[414px] lg:w-[348px]">
            <h2 className="dark:text-white">Have a question?</h2>
            <h3 className="dark:text-white">Contact Us!</h3>
            <p className="dark:text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              euismod, sapien eget malesuada efficitur, lectus nisl scelerisque
              lorem, at fermentum ex ligula at erat. Nam at turpis non odio
              gravida molestie. Proin sit amet semper nunc, sit amet facilisis
              elit.
            </p>
          </div>
          <div className="flex flex-col flex-1 shadow-2xl h-[681px] py-16"></div>
        </div>
      </div>
    </section>
  );
};

export default Header;
