import React from 'react';
import './etest.css';

const GradientButtons = ({ selectedValue, onClick }) => {
    // Define a function to determine the color class based on the button value
    const getBorderClass = (value) => {
      if ([1, 2, 3].includes(value)) {
        return 'purple-border';
      } else if ([5, 6, 7].includes(value)) {
        return 'green-border';
      } else if (value === 4) {
        return 'grey-border';
      }
      return '';
    };
return (
 <div className="circle-button-wrapper">
    <h3 style={{ color: 'purple' }}>Disagree</h3>
    <div className="labels-wrapper">

      {/* Gradient buttons */}
      {[1, 2, 3, 4, 5, 6, 7].map((value) => (
        <>
        <button
          key={value}
          className={`circle-button ${getBorderClass(value)} ${selectedValue === value ? 'selected' : ''}`}
          onClick={() => onClick(value)}
        >
          {value}
        </button>
        </>
      ))}
    </div>
    <h3 style={{ color: '#21867e' }}>Agree</h3>
  </div>
);
}
export default GradientButtons;
