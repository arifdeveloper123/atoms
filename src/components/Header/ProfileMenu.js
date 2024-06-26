import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import "./styles.css";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => 
    { setAnchorEl(event.currentTarget); };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}
         onClick={handleClick}  className="profile-menu-flex" >
        <GiHamburgerMenu/>
        <FaUserCircle/>       
      </div>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
            MenuListProps={{'aria-labelledby': 'basic-button', }} >
        <MenuItem className="menu-items" onClick={handleClose}>Signup</MenuItem>
        <MenuItem className="menu-items" onClick={handleClose}>Login</MenuItem>
        <div style={{ height: "1px", backgroundColor: "var(--gray)",  width:"100%", }}/>
        <MenuItem className="menu-items" onClick={handleClose}>Airbnb Your Home</MenuItem>
        <MenuItem className="menu-items" onClick={handleClose}>Host an experience</MenuItem>
        <MenuItem className="menu-items" onClick={handleClose}>Help</MenuItem>
      </Menu>
    </div>
  );
}


