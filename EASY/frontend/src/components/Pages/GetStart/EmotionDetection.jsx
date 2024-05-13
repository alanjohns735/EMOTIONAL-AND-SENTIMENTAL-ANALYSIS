import React from 'react';
import './ED.css'; // Ensure your CSS is correctly imported
import face from '../Assets/face.png'; // Correct relative path
import { Link } from "react-router-dom";

const EmotionDetection = () => {
  const redirectToPort = () => {
    // Redirect to a different port
    window.location.href = 'http://localhost:3010/face_detection'; // Redirect to localhost on port 3010
  };
  return (
    <div className="emotion-detection-container">
      <div className="content"> {/* Main container */}
        <div className="image-container"> {/* Container for the image */}
          <img src={face} alt="Face" />
        </div>
        <div className="content-details"> {/* Container for text and buttons */}
          <h1>
         
Choose your option</h1>
          <div className="buttons-container">
            <Link to="/emotion" className="center-button">
              Sentimental Analysis
            </Link>
            <button onClick={redirectToPort} className="center-button">
              Emotion Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionDetection;