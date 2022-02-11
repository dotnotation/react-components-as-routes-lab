import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "lavender",
  textDecoration: "none",
  color: "aqua",
}

const activeLink = {
  background: "lavender", 
  color: "aqua",
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to="/" exact style={link} activeStyle={activeLink}>Home</NavLink>
      <NavLink to="/movies" exact style={link} activeStyle={activeLink}>Movies</NavLink>
      <NavLink to="/directors" exact style={link} activeStyle={activeLink}>Directors</NavLink>
      <NavLink to="/actors" exact style={link} activeStyle={activeLink}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
