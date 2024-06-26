import React, { useEffect, useRef } from 'react';
import "./styles.css";

const DestinationDropdown = ({ setDestination }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="dropdown">
      <input 
        type="text" placeholder="Enter a destination" 
        onChange={(e) => setDestination(e.target.value)} className="dropdown-input"
        ref={inputRef} />
    </div>
  );
};

export default DestinationDropdown;

