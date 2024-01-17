import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';
// const [uploadedImage, setUploadedImage] = useState(null);
// const Imageuploader = () => {
  
//   const onDrop = useCallback((acceptedFiles) => {
//     // Do something with the uploaded files
//     console.log(acceptedFiles);
//     if (acceptedFiles.length > 0) {
//       setUploadedImage(URL.createObjectURL(acceptedFiles[0]));
//     }
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  
//   return (
//     <div className="container">
//       <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
//         <input {...getInputProps()} />
//         <p>Drag & drop an image here, or click to select one</p>
//       </div>
//     </div>
//   );
 
// };
// const handleDownload = () => {
//   if (uploadedImage) {
//     // Create a temporary link and simulate a click to trigger the download
//     const link = document.createElement('a');
//     link.href = uploadedImage;
//     link.download = 'uploaded-image.png'; // Specify the desired file name
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }
// };

function ImageUploader() {
    const [uploadedImage, setUploadedImage] = useState(null);
  
    const onDrop = useCallback((acceptedFiles) => {
      // Handle the uploaded files, you can save or process them here
      console.log('Uploaded files:', acceptedFiles);
  
      // For this example, store the first uploaded image
      if (acceptedFiles.length > 0) {
        setUploadedImage(URL.createObjectURL(acceptedFiles[0]));
      }
    }, []);
  
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: 'image/*', // Allow only image files
      multiple: false, // Allow only one file to be uploaded
    });
    
    const handleDownload = () => {
      if (uploadedImage) {
        // Create a temporary link and simulate a click to trigger the download
        const link = document.createElement('a');
        link.href = uploadedImage;
        link.download = 'uploaded-image.png'; // Specify the desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };
  
  return (
    <div>
    <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop an image file here, or click to select one</p>
    </div>
    {uploadedImage && (
      <div>
        <img src={uploadedImage} alt="Uploaded" style={{ maxWidth: '100%' }} />
        <button onClick={handleDownload}>Download Image</button>
      </div>
    )}
  </div>
  );
}
const dropzoneStyles = {
  border: '2px dashed #0087F7',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};
export default ImageUploader;
