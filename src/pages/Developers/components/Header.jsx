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
    <section
      className="flex flex-col justify-center items-center 2xl:h-[1000px] lg:h-[800px] w-full  bg-cover bg-center relative bg-no-repeat py-16 md:py-20 bg-[url(https://res.cloudinary.com/dq5guzzge/image/upload/v1735800494/components/developers_header/bg_light.png)]
    // dark:bg-[url(https://res.cloudinary.com/dq5guzzge/image/upload/v1735800477/components/developers_header/bg_dark.png)]">
      <div className="flex flex-col justify-center items-center mb-8 gap-6">
        <h1 className="text-white">
          Worldwide secure processing with a few lines of code.
        </h1>
        <p className="text-white 2xl:w-[879px] xl:w-[658px] lg:w-[580px] text-center">
          Empower your creativity with Acceptify, a cutting-edge coding tool
          inspired by simplicity and efficiency unleash the full potential of
          your projects.
        </p>
      </div>
      <CodeHighlighter />
      <div className="flex flex-col justify-center items-center mt-32">
        <p className="lg:text-[18px]">Available in</p>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
