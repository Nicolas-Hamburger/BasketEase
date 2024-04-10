"use client";
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from '@mui/icons-material/Person';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InventoryIcon from '@mui/icons-material/Inventory';
import OutputIcon from '@mui/icons-material/Output';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import "../../styles/navbar.css";

function Navbar() {
  return (
    <>
      <Box className="container-nav">
        <nav>
          <ul>
            <li className="items-nav">
              <Link to="/home"><HomeIcon /></Link>
            </li>
            <li className="items-nav">
              <Link to="/usuarios"><PersonIcon /></Link>
            </li>
            <li className="items-nav">
              <Link to="/ventas"><MonetizationOnIcon /></Link>
            </li>
            <li className="items-nav">
              <Link to="/productos"><InventoryIcon /></Link>
            </li>
            <li className="items-nav">
              <Link to="/login"><OutputIcon /></Link>
            </li>
            <li className="items-nav">
              <Link to="/conf"><SettingsIcon /></Link>
            </li>
          </ul>
        </nav>
        <Avatar
          sx={{ width: 45, height: 45 }}>
          NH
        </Avatar>
      </Box>
    </>

  );
}

export default Navbar;
