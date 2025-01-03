import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  a11yDark,
  a11yLight,
  agate,
  anOldHope,
  androidstudio,
  arduinoLight,
  arta,
  ascetic,
  atelierCaveDark,
  atelierCaveLight,
  atelierDuneDark,
  atelierDuneLight,
  atelierEstuaryDark,
  atelierEstuaryLight,
  atelierForestDark,
  atelierForestLight,
  nightOwl,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaRegCopy } from "react-icons/fa";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="w-full max-w-3xl rounded-lg overflow-hidden bg-[#22212c]">
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
      <div className="p-4">
        <SyntaxHighlighter
          language="javascript"
          style={nightOwl}
          wrapLongLines={true}
          customStyle={{
            background: "transparent",
            margin: 0,
            padding: 0,
            color: "#65d008",
            fontSize: "13px",
          }}
          showLineNumbers>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeHighlighter;
