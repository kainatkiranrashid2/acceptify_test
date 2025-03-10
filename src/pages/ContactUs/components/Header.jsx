import { useState } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const Header = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

    // Common input styles using only allowed Tailwind classes
    const inputClasses = `
    w-full h-full px-2 py-1 sm:p-2
    text-[12px]/[12px] sm:text-[12px]/[27px] lg:text-[16px]/[27px] xl:text-[16px]/[27px]
    sm:ml-2 border dark:text-white dark:border-none
    border-gray-300 rounded-[4px] sm:rounded-md
    bg-gray-100 dark:bg-[#150731]
    outline-none appearance-none
    [&:-webkit-autofill]:!bg-gray-100
    dark:[&:-webkit-autofill]:!bg-[#150731]
    [&:-webkit-autofill]:shadow-[inset_0_0_0_100px_#f3f4f6]
    dark:[&:-webkit-autofill]:shadow-[inset_0_0_0_100px_#150731]
    [&:-webkit-autofill]:!-webkit-text-fill-color-[#000]
    dark:[&:-webkit-autofill]:!-webkit-text-fill-color-[#fff]
    dark:[&:-webkit-autofill]:[color-scheme:dark]
  `;

  // Additional Safari-specific styles using inline style
  const safariAutofillStyle = {
    WebkitBoxShadow: "0 0 0 100px #f3f4f6 inset",
    WebkitTextFillColor: "#000",
    colorScheme: "light",
    backgroundColor: "#f3f4f6",
  };

  const safariAutofillStyleDark = {
    WebkitBoxShadow: "0 0 0 100px #150731 inset",
    WebkitTextFillColor: "#fff",
    colorScheme: "dark",
    backgroundColor: "#150731",
  };

  return (
    <section className=" relative overflow-hidden dark:bg-[#06142F]">
      <div className="absolute dark:hidden -top-64 -left-32 w-[376px] h-[376px] bg-white rounded-full blur-3xl" />
      <div className="absolute  hidden dark:block -top-64 -left-32 w-[376px] h-[376px] bg-[#431C95] rounded-full blur-3xl" />
      <div className="absolute  block dark:hidden sm:top-40 md:top-10 contact__leftoval opacity-30 md:opacity-30 -left-[40%] sm:-left-[30%] md:-left-[20%] z-0 "></div>
      <div className="absolute dark:hidden  block top-[620px] sm:top-[620px] md:top-[850px] lg:top-[550px] contact__rightoval opacity-30 dark:opacity-5 -right-10 z-0"></div>
      <div className="absolute hidden dark:block top-[300px] contact__rightoval_dark opacity-10 dark:opacity-5 -right-0 z-0 "></div>
      <div className="absolute hidden lg:block dark:hidden top-[350px] sm:top-[300px] md:top-[300px] blur-3xl md:blur-3xl lg:top-[200px] contact__midOval opacity-10 sm:opacity-30 md:opacity-30 lg:opacity-20 dark:opacity-5 md:left-0 lg:right-[40%] z-0 "></div>
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row  lg:justify-between lg:items-start xl:items-center md:pt-16 lg:pt-44 pt-[72px] sm:pt-16 pb-[60px] sm:pb-8 lg:pb-[312px] md:mx-10 lg:mx-20 md:gap-10 lg:gap-20">
          <div className="flex flex-col mx-auto w-[240px] sm:w-[524px] xl:w-[580px] lg:w-[348px] md:w-[644px] md:mx-auto mt-10 ">
            <div className="flex flex-col w-full gap-4 mb-6 mx-auto   ">
              <h2 className="dark:text-white text-center lg:text-left">
                Have a question?
              </h2>
              <h3 className="dark:text-white text-center  lg:block lg:text-left xl:text-[24px] sm:text-[18px] text-[14px] ">
                Contact Us!
              </h3>
              <p className=" text-center lg:text-left text-[12px]/[20px] sm:text-[16px]/[32px] lg:text-[14px]/[32px] xl:text-[20]/[32px]    dark:text-white ">
                Ready to get started, would you like more information on
                Acceptify’s features and benefits or pricing information? We are
                here to help. Our team is ready to provide exceptional support
                and ensure a seamless experience deploying Acceptify.
              </p>
            </div>
            <div className="hidden lg:flex  flex-col gap-8 xl:gap-4 xl:flex-row justify-between mt-12">
              <div className="gap-2  border-l py-0 pl-5 border-[#6137FC]/50  pr-2 flex flex-col w-full xl:w-[182px]">
                <img
                  src="https://res.cloudinary.com/acceptify/image/upload/v1736425662/components/contact_us/address_light.svg"
                  alt=""
                  className="dark:hidden h-6 w-6"
                />
                <img
                  src="https://res.cloudinary.com/acceptify/image/upload/v1736425854/components/contact_us/address_dark.svg"
                  alt=""
                  className="hidden dark:block h-6 w-6"
                />
                <p className="font-bold xl:text-[14px] dark:text-white">
                  Address
                </p>
                <p className="xl:text-[14px] w-full dark:text-white">
                  17681 Mitchell N Suite A Irvine, CA 92614
                </p>
              </div>
              <div className="gap-2  border-l py-0 border-[#6137FC]/50  pl-5  pr-2 flex flex-col w-full xl:w-[202px]">
                <img
                  src="https://res.cloudinary.com/acceptify/image/upload/v1736425662/components/contact_us/mail_light.svg"
                  className="h-6 w-6  dark:hidden "
                  alt="dark:hidden  "
                />
                <img
                  src="https://res.cloudinary.com/acceptify/image/upload/v1736425854/components/contact_us/email_dark.svg"
                  alt=""
                  className="hidden dark:block  h-6 w-6"
                />
                <p className="font-bold xl:text-[14px] dark:text-white">
                  Email
                </p>
                <div>
                  <p className="xl:text-[14px]/[14px] dark:text-white">
                    sales@acceptify.com{" "}
                  </p>
                  <p className="xl:text-[14px]/[14px] dark:text-white">
                    support@acceptify.com{" "}
                  </p>
                </div>
              </div>
              <div className="gap-2 border-l pl-5 py-0 border-[#6137FC]/50  pr-2 flex flex-col w-full xl:w-[150px]">
                <img
                  src="https://res.cloudinary.com/acceptify/image/upload/v1736425662/components/contact_us/phone_light.svg"
                  alt=""
                  className="dark:hidden h-6 w-6"
                />
                <img
                  src="https://res.cloudinary.com/acceptify/image/upload/v1736425855/components/contact_us/phone_dark.svg"
                  alt=""
                  className="hidden dark:block h-6 w-6"
                />
                <div className="">
                  <p className="font-bold xl:text-[14px] dark:text-white ">
                    Main Number
                  </p>
                </div>
                <p className="xl:text-[14px]/[14px] dark:text-white">
                  (949) 222-0300
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto w-[240px] h-[57x] sm:w-[524px] md:w-[524px] sm:h-[580px] bg-white dark:bg-[#282478] shadow-[0px_4px_40px_rgba(0,0,0,0.1)]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col  px-6 py-6 sm:px-10 sm:py-12 w-full">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row justify-start items-start sm:justify-between   sm:items-center">
                  <label htmlFor="name" className="">
                    <p className="font-medium text-[12px]/[27px] sm:text-[16px]/[27px] md:text-[18px]/[27px]lg:text-[20px] dark:text-white mb-2 sm:mb-0 ">
                      Name
                    </p>
                  </label>
                  <div className="h-6 w-48 sm:h-[45px] sm:w-[325px] sm:ml-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      style={document.documentElement.classList.contains('dark') ? safariAutofillStyleDark : safariAutofillStyle}/>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-start items-start sm:justify-between   sm:items-center">
                  <label htmlFor="email" className="">
                    <p className="font-medium text-[14px]/[27px] sm:text-[16px]/[27px] md:text-[18px]/[27px]lg:text-[20px] dark:text-white mb-2 sm:mb-0">
                      Email
                    </p>
                  </label>
                  <div className="h-6 w-48  sm:h-[45px] sm:w-[325px] ">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="johndoe@youremail.com"
                      className=" w-full h-full px-2 py-1 sm:p-2 text-[12px]/[12px] sm:text-[12px]/[27px] lg:text-[16px]/[27px] xl:text-[16px]/[27px]  sm:ml-2  border dark:text-white dark:border-none border-gray-300 rounded-[4px] sm:rounded-md  bg-gray-100 dark:bg-[#150731] outline-none [&:-webkit-autofill]:!bg-gray-100 [&:-webkit-autofill]:!shadow-[0_0_0_30px_#f3f4f6_inset] [&:-webkit-autofill]:!-webkit-text-fill-color-[#000] dark:[&:-webkit-autofill]:!shadow-[0_0_0_30px_#150731_inset] dark:[&:-webkit-autofill]:![color-scheme:dark] dark:[&:-webkit-autofill]:![background-image:none] dark:[&:-webkit-autofill]:!text-white dark:[&:-webkit-autofill]:![appearance:none] dark:[&:-webkit-autofill]:!-webkit-text-fill-color-[#fff]"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-start items-start sm:justify-between   sm:items-center">
                  <label htmlFor="phone" className="">
                    <p className="font-medium  text-[12px]/[12px] sm:text-[12px]/[27px] lg:text-[16px]/[27px] xl:text-[16px]/[27px]  md:text-[18px]/[27px]lg:text-[20px] dark:text-white mb-2 sm:mb-0">
                      Phone
                    </p>
                  </label>
                  <div className="h-6 w-48  sm:h-[45px] sm:w-[325px] ">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="(949) 222-0300"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className=" w-full h-full px-2 py-1 sm:p-2 text-[12px]/[12px] sm:text-[12px]/[27px] lg:text-[16px]/[27px] xl:text-[16px]/[27px] sm:ml-2  border dark:text-white dark:border-none border-gray-300 rounded-[4px] sm:rounded-md  bg-gray-100 dark:bg-[#150731] outline-none [&:-webkit-autofill]:!bg-gray-100 [&:-webkit-autofill]:!shadow-[0_0_0_30px_#f3f4f6_inset] [&:-webkit-autofill]:!-webkit-text-fill-color-[#000] dark:[&:-webkit-autofill]:!shadow-[0_0_0_30px_#150731_inset] dark:[&:-webkit-autofill]:![color-scheme:dark] dark:[&:-webkit-autofill]:![background-image:none] dark:[&:-webkit-autofill]:!text-white dark:[&:-webkit-autofill]:![appearance:none] dark:[&:-webkit-autofill]:!-webkit-text-fill-color-[#fff]"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-start items-start sm:justify-between   sm:items-center">
                  <label htmlFor="company" className="">
                    <p className="font-medium text-[14px]/[27px] sm:text-[16px]/[27px] md:text-[18px]/[27px]lg:text-[20px] dark:text-white mb-2 sm:mb-0">
                      Company
                    </p>
                  </label>
                  <div className="h-6 w-48  sm:h-[45px] sm:w-[325px] ">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company Name"
                      className="w-full h-full px-2 py-1 sm:p-2 text-[12px]/[12px] sm:text-[12px]/[27px] lg:text-[16px]/[27px] xl:text-[16px]/[27px]  sm:ml-2  border dark:text-white dark:border-none border-gray-300 rounded-[4px] sm:rounded-md  bg-gray-100 dark:bg-[#150731] outline-none [&:-webkit-autofill]:!bg-gray-100 [&:-webkit-autofill]:!shadow-[0_0_0_30px_#f3f4f6_inset] [&:-webkit-autofill]:!-webkit-text-fill-color-[#000] dark:[&:-webkit-autofill]:!shadow-[0_0_0_30px_#150731_inset] dark:[&:-webkit-autofill]:![color-scheme:dark] dark:[&:-webkit-autofill]:![background-image:none] dark:[&:-webkit-autofill]:!text-white dark:[&:-webkit-autofill]:![appearance:none] dark:[&:-webkit-autofill]:!-webkit-text-fill-color-[#fff]"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-start items-start sm:justify-between   sm:items-center">
                  <label htmlFor="company" className="dark:text-white">
                    <p className="font-medium text-[14px]/[27px] sm:text-[16px]/[27px] md:text-[18px]/[27px]lg:text-[20px] dark:text-white mb-2 sm:mb-0 ">
                      Message
                    </p>
                  </label>
                  <div className="h-[60px] w-48  sm:h-[140px] sm:w-[325px] ">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write a message..."
                      className="w-full !h-full px-2 py-1 sm:p-2 text-[12px]/[12px] sm:text-[12px]/[27px] lg:text-[16px]/[27px] xl:text-[16px]/[27px] sm:ml-2 
                        border dark:text-white dark:border-none border-gray-300 rounded-[4px] sm:rounded-md 
                        bg-gray-100 dark:bg-[#150731] outline-none resize-none
                        [&:-webkit-autofill]:!bg-gray-100
                        dark:[&:-webkit-autofill]:!bg-[#150731]
                        [&:-webkit-autofill]:shadow-[inset_0_0_0_100px_#f3f4f6]
                        dark:[&:-webkit-autofill]:shadow-[inset_0_0_0_100px_#150731]
                        [&:-webkit-autofill]:!-webkit-text-fill-color-[#000]
                        dark:[&:-webkit-autofill]:!-webkit-text-fill-color-[#fff]
                        dark:[&:-webkit-autofill]:[color-scheme:dark]
                        appearance-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-4   ">
              <button type="submit" className="bg-primary hidden md:block text-white px-[14px] hover:bg-[#51A805] py-[10px] text-[16px]/[27px] rounded-sm md:rounded-lg">
               Submit
              </button>
              <button className="block md:hidden bg-primary text-white px-[14px] hover:bg-[#51A805] rounded-sm md:rounded-lg py-[6.8px] text-[11px]/[16.5px] sm:text-[11px]/[16px]">
                Submit
              </button>
              </div>
            </form>
          </div>
          <div className=" lg:hidden flex flex-col items-center mx-auto  w-[240px] sm:w-[556px] md:w-[544px] sm:flex-row gap-8  sm:h-[117.9px] justify-between mt-10 md:mt-20">
            <div className="  gap-2 sm:w-[200px] md:w-[210px]  h-full border-l py-0 pl-5 border-[#6137FC]/50  pr-2 flex flex-col ">
              {/* <FaMapMarkedAlt size={24} className="dark:text-white" />
               */}
              <img
                src="https://res.cloudinary.com/acceptify/image/upload/v1736425662/components/contact_us/address_light.svg"
                alt=""
                className="dark:hidden h-6 w-6"
              />
              <img
                src="https://res.cloudinary.com/acceptify/image/upload/v1736425854/components/contact_us/address_dark.svg"
                alt=""
                className="hidden dark:block h-6 w-6"
              />

              <p className="font-bold sm:text-[14px]/[140%] dark:text-white">
                Address
              </p>
              <p className="sm:text-[14px]/[140%] w-full dark:text-white">
                17681 Mitchell N Suite A Irvine, CA 92614
              </p>
            </div>
            <div className="gap-2 sm:w-[180px]  border-l h-full py-0 border-[#6137FC]/50  pl-5  pr-2 flex flex-col w-full ">
              {/* <HiOutlineMail size={32} className="dark:text-white" /> */}
              <img
                src="https://res.cloudinary.com/acceptify/image/upload/v1736425662/components/contact_us/mail_light.svg"
                className="h-6 w-6  dark:hidden "
                alt="dark:hidden  "
              />
              <img
                src="https://res.cloudinary.com/acceptify/image/upload/v1736425854/components/contact_us/email_dark.svg"
                alt=""
                className="hidden dark:block  h-6 w-6"
              />
              <p className="font-bold xl:text-[14px] dark:text-white">Email</p>
              <div>
                <p className="sm:text-[14px]/[140%] dark:text-white">
                  sales@acceptify.com{" "}
                </p>
                <p className="sm:text-[14px]/[140%] dark:text-white">
                  support@acceptify.com{" "}
                </p>
              </div>
            </div>
            <div className="gap-2 sm:w-[150px] border-l h-full pl-5 py-0 border-[#6137FC]/50  pr-2 flex flex-col w-full xl:w-[150px]">
              {/* <FiPhone size={24} className="dark:text-white" /> */}
              <img
                src="https://res.cloudinary.com/acceptify/image/upload/v1736425662/components/contact_us/phone_light.svg"
                alt=""
                className="dark:hidden h-6 w-6"
              />
              <img
                src="https://res.cloudinary.com/acceptify/image/upload/v1736425855/components/contact_us/phone_dark.svg"
                alt=""
                className="hidden dark:block h-6 w-6"
              />
              <div className="my-[3px]">
                <p className="font-bold sm:text-[14px]/[140%] w-full dark:text-white ">
                  Main Number
                </p>
              </div>
              <p className="sm:text-[14px]/[140%] dark:text-white">
                (949) 222-0300
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
