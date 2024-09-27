import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleRedirect}>Go to Home</button>
    </div>
  );
}

export default About;