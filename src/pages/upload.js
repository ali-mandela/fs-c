import React, { useState } from 'react';
import './upload.css'; // Import your CSS file

function UploadComponent() {
  const [file, setFile] = useState(null);
  const [emails, setEmails] = useState(['', '', '', '', '']);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to hold file and email data
    const formData = new FormData();
    formData.append('file', file);

    // Convert emails array to a comma-separated string
    const emailsString = emails.join(',');
    formData.append('emails', emailsString);

    try {
      // Make POST request to your upload route using the base URL
      const baseUrl = 'YOUR_BASE_URL'; // Replace with your base URL
      const response = await fetch(`${baseUrl}/upload`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Display success message
        setSuccess(true);
        setError(false);
      } else {
        console.error('Upload failed');
        setError(true);
      }
    } catch (error) {
      console.error('Error uploading:', error);
      setError(true);
    }
  };

  return (
    <div className="upload-container">
      {success ? (
        <div>
          <p className="success-message">Thank you! File and emails uploaded successfully!</p>
          <button className="upload-again" onClick={() => setSuccess(false)}>
            Upload Again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="upload-form">
          {error && <p className="error-message">Error uploading. Please try again later.</p>}
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          {emails.map((email, index) => (
            <input
              key={index}
              type="email"
              placeholder={`Email ${index + 1}`}
              value={email}
              onChange={(e) => {
                const updatedEmails = [...emails];
                updatedEmails[index] = e.target.value;
                setEmails(updatedEmails);
              }}
            />
          ))}
          <button type="submit" className="upload-button">
            Upload
          </button>
        </form>
      )}
    </div>
  );
}

export default UploadComponent;
