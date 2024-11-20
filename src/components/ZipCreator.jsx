//Here’s a simple React component that creates a ZIP file from a couple of text files:

import { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver'; // You'll need file-saver for saving the file

const ZipCreator = () => {
  const [status, setStatus] = useState('');

  const createZip = () => {
    const zip = new JSZip();
    
    // Adding text files to the ZIP
    zip.file("hello.txt", "Hello World Ahmad Sharafat");
    zip.file("message.txt", "This is a message inside a text file.");
    
    // Generate the ZIP file
    zip.generateAsync({ type: "blob" })
      .then(function(content) {
        // Saving the ZIP file
        saveAs(content, "example.zip");
        setStatus('ZIP file created successfully!');
      })
      .catch((err) => {
        console.error("Error creating ZIP:", err);
        setStatus('Error creating ZIP.');
      });
  };

  return (
    <div>
      <button onClick={createZip}>Create ZIP</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ZipCreator;
