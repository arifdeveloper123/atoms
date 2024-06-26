import React, { useState, useRef, useEffect } from 'react';
import "./styles.css";
import logo from "../../assets/logo/logoairbnb.png";
import { FaSearch, FaGlobe } from "react-icons/fa";
import BasicMenu from "./ProfileMenu";
import DestinationDropdown from "./DestinationDropdown";
import DateDropdown from "./DateDropdown";
import GuestsDropdown from "./GuestsDropdown";

const Header = () => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState('');
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  const handleSearch = () => { console.log('Searching with:', destination, dates, guests);
    setDestination('');
    setDates('');
    setGuests('');
    setShowDestinationDropdown(false);
    setShowDateDropdown(false);
    setShowGuestsDropdown(false);
  };

  const destinationRef = useRef(null);
  const dateRef = useRef(null);
  const guestsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (destinationRef.current && !destinationRef.current.contains(event.target)) {
        setShowDestinationDropdown(false);
      }
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setShowDateDropdown(false);
      }
      if (guestsRef.current && !guestsRef.current.contains(event.target)) {
        setShowGuestsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <div className="search-bar">
        <div className="search-bar-text" ref={destinationRef}
          onClick={() => {
            setShowDestinationDropdown(!showDestinationDropdown);  setShowDateDropdown(false); setShowGuestsDropdown(false); }} >
          {destination || "Anywhere"}
          {showDestinationDropdown && <DestinationDropdown setDestination={setDestination} />}
        </div>
        
        <div className="search-bar-text" ref={dateRef}
          onClick={() => { setShowDateDropdown(!showDateDropdown); setShowDestinationDropdown(false); setShowGuestsDropdown(false); }} >
          {dates || "Any week"}
          {showDateDropdown && <DateDropdown setDates={setDates} />}
        </div>
        
        <div className="search-bar-text1" ref={guestsRef}
          onClick={() => {
            setShowGuestsDropdown(!showGuestsDropdown); setShowDestinationDropdown(false); setShowDateDropdown(false); }} >
          {guests || "Add guests"}
          {showGuestsDropdown && <GuestsDropdown setGuests={setGuests} />}
        </div>

        <div className="search-icon-div" onClick={handleSearch}>
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="profile-container">
        <div className="airbnb-your-home">Airbnb your home</div>
        <FaGlobe />
        <BasicMenu />
      </div>
    </div>
  );
}

export default Header;


