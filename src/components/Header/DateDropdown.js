import React, { useEffect, useRef } from 'react';
import "./styles.css";

const DateDropdown = ({ setDates }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="dropdown">
      <input 
        type="text" placeholder="Enter dates" 
        onChange={(e) => setDates(e.target.value)} 
         className="dropdown-input" ref={inputRef} 
         
    />
    </div>
  );
};

export default DateDropdown;
