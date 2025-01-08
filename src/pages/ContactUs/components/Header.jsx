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
  return (
    <section className=" relative overflow-hidden dark:bg-[#06142F]">
      <div className="absolute dark:hidden -top-64 -left-32 w-[376px] h-[376px] bg-white rounded-full blur-3xl" />
      <div className="absolute hidden dark:block -top-64 -left-32 w-[376px] h-[376px] bg-[#431C95] rounded-full blur-3xl" />
      <div className="absolute dark:hidden top-10 contact__leftoval opacity-20 -left-[20%] z-0 "></div>
      <div className="absolute dark:hidden top-[550px] contact__rightoval opacity-10 dark:opacity-5 -right-[20%] z-0 "></div>
      <div className="absolute hidden dark:block top-[300px] contact__rightoval_dark opacity-10 dark:opacity-5 -right-0 z-0 "></div>
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row  lg:justify-between lg:items-start md:pt-16 lg:pt-48 md:pb-10 lg:pb-72 md:mx-10 lg:mx-20 md:gap-10 lg:gap-20">
          <div className="flex flex-col xl:w-[580px] lg:w-[348px] md:w-[644px] md:mx-auto mt-10 ">
            <div className="flex flex-col w-full  ">
              <h2 className="dark:text-white text-center lg:text-left">
                Have a question?
              </h2>
              <h3 className="dark:text-white text-center md:hidden lg:block lg:text-left">
                Contact Us!
              </h3>
              <p className="dark:text-white lg:mt-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                euismod, sapien eget malesuada efficitur, lectus nisl
                scelerisque lorem, at fermentum ex ligula at erat. Nam at turpis
                non odio gravida molestie. Proin sit amet semper nunc, sit amet
                facilisis elit.
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-8 xl:gap-4 xl:flex-row justify-between mt-12">
              <div className="gap-2  border-l py-0 pl-5 border-[#6137FC]/50  pr-2 flex flex-col w-full xl:w-[182px]">
                <FaMapMarkedAlt size={24} className="dark:text-white" />
                <p className="font-bold xl:text-[14px] dark:text-white">
                  Address
                </p>
                <p className="xl:text-[14px] w-full dark:text-white">
                  17681 Mitchell N Suite A Irvine, CA 92614
                </p>
              </div>
              <div className="gap-2  border-l py-0 border-[#6137FC]/50  pl-5  pr-2 flex flex-col w-full xl:w-[202px]">
                <HiOutlineMail size={24} className="dark:text-white" />
                <p className="font-bold xl:text-[14px] dark:text-white">
                  Email
                </p>
                <p className="xl:text-[14px]/[14px] dark:text-white">
                  sales@acceptify.com{" "}
                </p>
                <p className="xl:text-[14px]/[14px] dark:text-white">
                  support@acceptify.com{" "}
                </p>
              </div>
              <div className="gap-2 border-l pl-5 py-0 border-[#6137FC]/50  pr-2 flex flex-col w-full xl:w-[150px]">
                <FiPhone size={24} className="dark:text-white" />
                <p className="font-bold dark:text-white xl:text-[14px]/[15px] my-0">
                  Main Number
                </p>
                <p className="xl:text-[14px]/[14px] dark:text-white">
                  (949) 222-0300
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto md:w-[533px] h-[580px] bg-white dark:bg-[#282478] shadow-[0px_4px_40px_rgba(0,0,0,0.1)]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col   px-10 py-12 w-full">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center ">
                  <label htmlFor="name" className="">
                    <p className="font-semibold text-[20px] dark:text-white ">
                      Name
                    </p>
                  </label>
                  <div className="md:h-[45px] md:w-[325px] ml-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full h-full px-2  ml-2  border dark:border-none border-gray-300 rounded-md  bg-gray-100 dark:bg-[#150731]"
                    />
                  </div>
                </div>

                <div className="flex justify-between  items-center">
                  <label htmlFor="email" className="">
                    <p className="font-semibold text-[20px] dark:text-white">
                      Email
                    </p>
                  </label>
                  <div className="md:h-[45px] md:w-[325px] ">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="johndoe@youremail.com"
                      className=" h-full px-2  ml-2 border border-gray-300 dark:border-none dark:bg-[#150731] rounded-md w-full bg-gray-100"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <label htmlFor="phone" className="">
                    <p className="font-semibold text-[20px] dark:text-white">
                      Phone
                    </p>
                  </label>
                  <div className="md:h-[45px] md:w-[325px] ">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="johndoe@youremail.com"
                      className=" h-full px-2  ml-2 border dark:border-none border-gray-300 rounded-md w-full bg-gray-100 dark:bg-[#150731]"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <label htmlFor="company" className="">
                    <p className="font-semibold text-[20px] dark:text-white">
                      Company
                    </p>
                  </label>
                  <div className="md:h-[45px] md:w-[325px] ">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="johndoe@youremail.com"
                      className=" h-full px-2  ml-2 border dark:border-none dark:border-none border-gray-300 rounded-md w-full dark:bg-[#150731] bg-gray-100"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <label htmlFor="company" className="dark:text-white">
                    <p className="font-semibold text-[20px] ">Message</p>
                  </label>
                  <div className="md:h-[120px] md:w-[325px] ">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="johndoe@youremail.com"
                      className=" h-full resize-none py-2 px-2 dark:border-none  ml-2 border dark:bg-[#150731] border-gray-300 rounded-md w-full bg-gray-100"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-4 mt-6">
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 text-base rounded-lg hover:bg-[#51A805] transition-colors">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="lg:hidden flex flex-row gap-8 xl:gap-4  justify-between mt-20">
            <div className="  gap-2  border-l py-0 pl-5 border-[#6137FC]/50  pr-2 flex flex-col w-full xl:w-[182px]">
              <FaMapMarkedAlt size={24} className="dark:text-white" />
              <p className="font-bold xl:text-[14px] dark:text-white">
                Address
              </p>
              <p className="xl:text-[14px] w-full dark:text-white">
                17681 Mitchell N Suite A Irvine, CA 92614
              </p>
            </div>
            <div className="gap-2  border-l py-0 border-[#6137FC]/50  pl-5  pr-2 flex flex-col w-full xl:w-[202px]">
              <HiOutlineMail className="dark:text-white" size={24} />
              <p className="font-bold xl:text-[14px] dark:text-white">Email</p>
              <p className="xl:text-[14px]/[14px] dark:text-white">
                sales@acceptify.com{" "}
              </p>
              <p className="xl:text-[14px]/[14px] dark:text-white">
                support@acceptify.com{" "}
              </p>
            </div>
            <div className="gap-2 border-l pl-5 py-0 border-[#6137FC]/50  pr-2 flex flex-col w-full xl:w-[150px]">
              <FiPhone size={24} className="dark:text-white" />
              <p className="font-bold xl:text-[14px]/[15px] dark:text-white my-0">
                Main Number
              </p>
              <p className="xl:text-[14px]/[14px] dark:text-white">
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
