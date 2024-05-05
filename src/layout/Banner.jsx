import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <div className="banner">
      <video autoPlay loop muted playsInline>
        <source src="/assets/icons/ToyLand.mp4" type="video/mp4" />
        Tu navegador no admite videos HTML5.
      </video>
      <div className="banner-container">
       
      </div>
    </div>
  );
};

export default Banner;



