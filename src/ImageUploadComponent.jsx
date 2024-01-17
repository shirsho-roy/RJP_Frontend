import React, { useState } from 'react';
import './Image.css'; 

const ImageUploadComponent = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('File uploaded successfully');
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className='bigbox'>
      <div id="place">
      <input type="file" onChange={handleFileChange} id="file" />
      <button className='buttons' onClick={handleUpload}>Upload Image</button>
      </div>
    </div>
  );
};

export default ImageUploadComponent;
