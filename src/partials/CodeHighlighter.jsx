import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaRegCopy } from "react-icons/fa";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const CodeHighlighter = () => {
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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeString);

      toast.success("Code copied to clipboard!", {
        id: "copy-toast",
        duration: 2000,
        position: "bottom-right",
        style: {
          background: "#22212c",
          color: "#fff",
          borderRadius: "8px",
          border: "1px solid #65d008",
        },
        icon: "✓",
      });

      // Reset copy icon after 2 seconds
      setTimeout(() => {}, 2000);
    } catch (err) {
      toast.error("Failed to copy code", {
        duration: 2000,
        position: "bottom-right",
        style: {
          background: "#22212c",
          color: "#fff",
          borderRadius: "8px",
          border: "1px solid #ff0000",
        },
      });
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <>
      <div className="2xl:w-[968px] xl:w-[793px] lg:w-[688px] md:w-[580px] sm:w-full sm:h-[240px] md:h-[283px] xl:h-[356px] lg:[336px] h-[215px]  w-[288px] rounded-lg overflow-hidden bg-[#22212c]">
        <div className="flex items-center justify-between px-4 py-2 bg-[#22212c]  ">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <button
            onClick={copyToClipboard}
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="Copy code">
            <FaRegCopy size={16} />
          </button>
        </div>
        <div className="p-1 sm:p-2 md:p-4 h-[calc(215px-10px)] sm:h-[calc(237px-18px)] lg:h-[calc(336px-36px)] xl:h-[calc(356px-36px)] md:h-[calc(283px-36px)]">
          {" "}
          {/* 36px accounts for the header height */}
          <SyntaxHighlighter
            language="javascript"
            style={nightOwl}
            customStyle={{
              background: "transparent",
              margin: 0,
              // padding: 1,
              color: "#65d008",
              // fontSize: "8px",
              height: "100%",
              lineHeight: "0.6", // Added this line to reduce spacing
            }}
            codeTagProps={{
              className:
                "text-[8px] sm:text-[10px] md:text-[11px] lg:text-[13px] ",
            }}
            showLineNumbers>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: "rounded-lg",
        }}
      />
    </>
  );
};

export default CodeHighlighter;
