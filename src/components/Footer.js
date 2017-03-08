import React from 'react';
import Copyright from './Copyright';

const Footer = props => {

  const footerObj = props.profileData;

  return (
        <div className="w3-container w3-teal w3-center w3-margin-top">
          <div className="w3-container">
          <p>Get in touch with me.</p>
          <i className="fa fa-facebook-square w3-hover-text-indigo w3-xxlarge w3-margin" href={footerObj.profiles[0].url}></i>
          <i className="fa fa-linkedin-square w3-hover-text-blue w3-xxlarge w3-margin" href={footerObj.profiles[1].url}></i>
          <i className="fa fa-github-square w3-hover-text-grey w3-xxlarge w3-margin" href={footerObj.profiles[2].url}></i>
          </div>
          <Copyright />
        </div>

  )
};

export default Footer;
