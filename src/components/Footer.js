import React from 'react';
import './Footer.css';
import './Button.scss';
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import BoltIcon from '@mui/icons-material/Bolt';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const Footer = () => {
  return (
    <div className="bottomButtons">
      <IconButton className="replay">
        <ReplayIcon className="button" fontSize="large" />
      </IconButton>
      <IconButton className="close">
        <CloseIcon className="button" fontSize="large" />
      </IconButton>
      <IconButton className="star">
        <StarIcon className="button" fontSize="large" />
      </IconButton>
      <IconButton className="favourite">
        <FavoriteIcon className="button" fontSize="large" />
      </IconButton>
      <IconButton className="flash">
        <BoltIcon className="button" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Footer;
