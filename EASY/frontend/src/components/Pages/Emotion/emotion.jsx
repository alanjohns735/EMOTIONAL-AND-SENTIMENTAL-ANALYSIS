import React from 'react';
import './Emotion.css'; // Correct CSS import path
import { Link } from 'react-router-dom';
const Emotion = () => {


  return (
    <div className="emotion-detection">
      <div className="content">
        <div className="contentdetailss">
          <h1>Instructions</h1>
          <ol>
            <li>
              <div className="gradient-box">
              All questions are mandatory
              </div>
            </li>
            <li>
              <div className="gradient-box">
              Be yourself and answer honestly to find out your personality type
              </div>
            </li>
            <li>
              <div className="gradient-box">
                Results will be displayed only after completing the tests
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div className="button-wrapper" >
        <button className="center-button">
          <Link to="/etest">Start</Link> {/* Correct path for the Link */}
        </button>
      </div>
    </div>
  );
};

export default Emotion;
