import React, { useEffect } from "react";
import CodeHighlighter from "../../../partials/CodeHighlighter";

const Header = () => {
  const codeString = `// Step 1: create a payment engine...
var paymentEngine = PaymentEngine.Builder().Server(ServerEnvironment.Test).Build();

// Step 2: connect...
paymentEngine.Connect();

// Step 3: create a transaction...
var transaction = paymentEngine.BuildTransaction(invoice)
    .Sale()
    .Amount(1.00, Currency.USD)
    .Build();

// Step 4: start the transaction
paymentEngine.StartTransaction(transaction, (transactionResult, transactionResponse) => { ... });`;

  return (
    <section className="flex flex-col justify-center items-center 2xl:h-[1000px] xl:h-[850px] lg:h-[800px] w-full  bg-cover bg-center relative bg-no-repeat py-16 md:py-20 bg-[url(https://res.cloudinary.com/dq5guzzge/image/upload/v1735800494/components/developers_header/bg_light.png)]">
      <div className="xl:w-[893px] lg:w-[772px] md:w-[632px]  sm:w-[486px] flex flex-col justify-center items-center gap-5 mb-8">
        <h1 className="text-white text-center xl:w-[893px] lg:w-[772px] md:w-[636px]  sm:w-[432px]  capitalize">
          Worldwide secure processing with a few lines of code
        </h1>
        <p className="text-white  2xl:w-[879px] xl:w-[658px] lg:w-[580px] md:w-[630px] sm:w-[433px] text-center">
          Empower your creativity with Acceptify, a cutting-edge coding tool
          inspired by simplicity and efficiency unleash the full potential of
          your projects.
        </p>
      </div>
      <div className="xl:w-[893px] lg:w-[772px] md:w-[632px]  sm:w-[486px] flex flex-col justify-center items-center">
        <CodeHighlighter />
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <p className="lg:text-[18px] text-white">Available in</p>
        <div className="flex mt-3 justify-center items-center gap-4">
          <img
            src="https://res.cloudinary.com/dq5guzzge/image/upload/v1735887831/components/developers_header/ios_icon.svg"
            alt="ios_icon"
            className="h-10 w-10"
          />
          <img
            src="https://res.cloudinary.com/dq5guzzge/image/upload/v1735887865/components/developers_header/android_icon.svg"
            alt="android_icon"
            className="h-10 w-10"
          />
          <img
            src="https://res.cloudinary.com/dq5guzzge/image/upload/v1735887788/components/developers_header/windows_icon.svg"
            alt="windows_icon"
            className="h-10 w-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
