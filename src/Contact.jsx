
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <button onClick={handleRedirect}>Go to Home</button>
    </div>
  );
}

export default Contact;