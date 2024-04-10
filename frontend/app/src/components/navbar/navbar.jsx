"use client";
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
// import HomeIcon from "@mui/icons-material/Home";
import "../../styles/navbar.css";

function Navbar() {
  return (
    <nav>
      <Avatar>NH</Avatar>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Acerca de</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
