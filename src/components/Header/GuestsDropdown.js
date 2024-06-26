import React, { useEffect, useRef } from 'react';
import "./styles.css";

const GuestsDropdown = ({ setGuests }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="dropdown">
      <input  type="text" placeholder="Enter number of guests" 
        onChange={(e) => setGuests(e.target.value)} className="dropdown-input"
        ref={inputRef} />
    </div>
  );
};

export default GuestsDropdown;
