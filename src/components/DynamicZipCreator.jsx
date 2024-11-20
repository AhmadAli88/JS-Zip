import { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const DynamicZipCreator = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const createZip = () => {
    const zip = new JSZip();

    // Adding uploaded files to ZIP
    Array.from(files).forEach((file) => {
      zip.file(file.name, file);
    });

    // Generate the ZIP file
    zip.generateAsync({ type: "blob" })
      .then(function(content) {
        saveAs(content, "dynamic_files.zip");
      })
      .catch((err) => {
        console.error("Error creating ZIP:", err);
      });
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={createZip}>Create ZIP with Files</button>
    </div>
  );
};

export default DynamicZipCreator;
