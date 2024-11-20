//we'll show how to add images (like PNG or JPEG files) to a ZIP file. React can handle base64-encoded images or files directly.

import JSZip from "jszip";
import { saveAs } from "file-saver";

const ImageZipCreator = () => {
  const createImageZip = () => {
    const zip = new JSZip();

    // Base64 encoded image (1x1 pixel transparent PNG)
    const imageBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8iVNBAAAAmklEQVRIDbXBAQEAAAABIP6PzgpV0KATy0oz8V0ikgA4GwQky0YbmffZm1rXQGA0FTm8mwnFg6BqwC8q9Aq9vfquHsFzzcdaYA5D4X50uBl5jwNr1vL2tzyNwD7ZfvIMntdD72ddCkHhYO2D44d2vVwJMc3f98bZGq8TnSg43J1g8KApVo4Ryd95Ctdk7yD0eU0KrW9yCp25gESxXxdWxyHGrfX1t8o73ROfflKXg5g+aOSV93hOdS1A++HbTXZ8Afb48/cn9Hw62SY2z0y7lQAAAABJRU5ErkJggg==";

    // Remove the base64 prefix (`data:image/png;base64,`)
    const base64Data = imageBase64.split(',')[1];

    // Add the image (without the prefix) to the ZIP file
    zip.file("image1.png", base64Data, { base64: true });

    // Generate and save the ZIP file
    zip.generateAsync({ type: "blob" })
      .then((content) => {
        saveAs(content, "images.zip");
      })
      .catch((err) => {
        console.error("Error creating ZIP:", err);
      });
  };

  return (
    <div>
      <button onClick={createImageZip}>Create ZIP with Images</button>
    </div>
  );
};

export default ImageZipCreator;
