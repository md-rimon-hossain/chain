/* eslint-disable react/prop-types */
import { CheckCheck, Copy } from "lucide-react";
import { useState } from "react";

const CopyToClipboardButton = ({ textToCopy }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyTextToClipboard = (text) => {
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);

    // Select the text within the textarea
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Clean up: remove the temporary textarea from the DOM
    document.body.removeChild(textarea);

    // Set copy success state to true and reset after 2 seconds
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  return (
    <div className="relative flex items-center justify-center pr-4 rounded-e-xl  bg-gray-200">
      <button
        onClick={(e) => {
          e.preventDefault();
          copyTextToClipboard(textToCopy);
        }}
      >
        {copySuccess ? (
          <CheckCheck className="text-[#663600]" />
        ) : (
          <Copy className="text-[#663600]" />
        )}
      </button>
    </div>
  );
};

export default CopyToClipboardButton;
