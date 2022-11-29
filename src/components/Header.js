import React from "react";
import "./Header.css";
import tinder from "../tinder.svg";

import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="tinder-header">
      <IconButton className="header-icons" fontSize="large">
        <PersonIcon fontSize="large" />
      </IconButton>
      <img src={tinder} className="App-logo" alt="logo" />
      <IconButton className="header-icons" fontSize="large">
        <ChatBubbleIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
