//You can also use JSZip to read and extract the contents of a ZIP file

import { useState } from 'react';
import JSZip from 'jszip';

const ZipReader = () => {
  const [fileContent, setFileContent] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const zip = new JSZip();

    // Read the ZIP file
    zip.loadAsync(file)
      .then((contents) => {
        // Extract a specific file content from the ZIP
        contents.forEach((relativePath, zipEntry) => {
          if (zipEntry.name === "hello.txt") {
            zipEntry.async("text").then((content) => {
              setFileContent(content);
            });
          }
        });
      })
      .catch((err) => {
        console.error("Error reading ZIP:", err);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {fileContent && <pre>{fileContent}</pre>}
    </div>
  );
};

export default ZipReader;
