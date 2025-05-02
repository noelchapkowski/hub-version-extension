(() => {
  const restricted = /^chrome:|^chrome-extension:|^about:|^edge:|^file:/i;
  if (restricted.test(window.location.href)) return;

  const searchTerm = "opendata-ui version:";
  const regex = new RegExp(`<!--\\s*${searchTerm}\\s*(.*?)\\s*-->`, "gi");

  function detectLocale() {
    return (
      document.documentElement.lang ||
      navigator.language ||
      "Unknown"
    );
  }

  fetch(window.location.href)
    .then(response => response.text())
    .then(source => {
      const matches = [];
      let match;

      while ((match = regex.exec(source)) !== null) {
        const fullContent = match[1].trim();
        const parts = fullContent.split(" - ");
        const version = parts[0]?.trim();
        const date = parts[1]?.trim();

        if (version && date) {
          matches.push(`Opendata UI Version: ${version}\nDate: ${date}`);
        } else {
          matches.push(`Raw match: ${match[0]}`);
        }
      }

      if (matches.length > 0) {
        const locale = detectLocale();
        const extraInfo = `\nLocale: ${locale}`;
        insertResults(matches.join("\n") + extraInfo);
      } else {
        insertResults(`This is not a Hub Site.`);
      }
    })
    .catch(error => {
      alert("Error fetching page source: " + error.message);
    });

function insertResults(content) {
  const resultBox = document.createElement('div');
  resultBox.style.position = 'fixed';
  resultBox.style.top = '20px';
  resultBox.style.left = '20px';
  resultBox.style.maxWidth = '400px';
  resultBox.style.maxHeight = '200px';
  resultBox.style.overflowY = 'auto';
  resultBox.style.border = '1px solid #ccc';
  resultBox.style.borderRadius = '5px';
  resultBox.style.padding = '15px 40px 15px 15px';
  resultBox.style.boxShadow = '0px 2px 10px rgba(0,0,0,0.2)';
  resultBox.style.zIndex = '9999';
  resultBox.style.fontSize = '14px';
  resultBox.style.whiteSpace = 'pre-wrap';
  resultBox.style.boxSizing = 'border-box';

  // Detect dark mode
  const isDarkMode = window.matchMedia &&
                     window.matchMedia('(prefers-color-scheme: dark)').matches;

  resultBox.style.backgroundColor = isDarkMode ? '#1e1e1e' : '#f8f8f8';
  resultBox.style.color = isDarkMode ? '#f0f0f0' : '#000';

  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.innerText = '×';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '5px';
  closeBtn.style.right = '10px';
  closeBtn.style.border = 'none';
  closeBtn.style.background = 'transparent';
  closeBtn.style.fontSize = '16px';
  closeBtn.style.color = isDarkMode ? '#f0f0f0' : '#000';
  closeBtn.style.cursor = 'pointer';
  closeBtn.onclick = () => resultBox.remove();

  resultBox.appendChild(closeBtn);
  resultBox.appendChild(document.createTextNode(content));

  document.body.appendChild(resultBox);
}
})();
