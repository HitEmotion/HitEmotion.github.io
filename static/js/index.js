"use strict";

// All research content and downloads remain usable without JavaScript.
const copyButton = document.getElementById("copy-bibtex");
const citation = document.getElementById("bibtex");
const copyStatus = document.getElementById("copy-status");

if (copyButton && citation && copyStatus && window.isSecureContext && navigator.clipboard?.writeText) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    copyButton.disabled = true;
    copyStatus.textContent = "";
    try {
      await navigator.clipboard.writeText(citation.textContent.trim() + "\n");
      copyStatus.textContent = "BibTeX copied to clipboard.";
    } catch {
      copyStatus.textContent = "Copy unavailable. Select the citation below, or download the BibTeX file.";
    } finally {
      copyButton.disabled = false;
    }
  });
}
