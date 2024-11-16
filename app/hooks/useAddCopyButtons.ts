import { useEffect } from "react";

export const useAddCopyButtons = (htmlContent: string) => {
  useEffect(() => {
    const addCopyButtonsToCodeBlocks = () => {
      const codeBlocks = document.querySelectorAll("pre");

      codeBlocks.forEach((block) => {
        if (block.querySelector(".copy-button")) return;

        const button = document.createElement("button");
        button.innerText = "Copy";
        button.className =
          "copy-button absolute right-2 top-2 bg-gray-700 text-white text-xs px-2 py-1 rounded hover:bg-gray-600 focus:outline-none";

        button.onclick = () => {
          const codeContent = block.innerText;
          navigator.clipboard.writeText(codeContent).then(() => {
            button.innerText = "Copied!";
            setTimeout(() => (button.innerText = "Copy"), 2000);
          });
        };

        block.style.position = "relative"; // Ensure positioning for the button
        block.appendChild(button);
      });
    };

    if (htmlContent) {
      addCopyButtonsToCodeBlocks();
    }
  }, [htmlContent]);
};
