import React from 'react';

const Profile = props => {

  const profileObj = props.profileData;

  return (
   <div className="w3-container w3-card-2 w3-white w3-margin-bottom w3-large w3-text-theme profile">
      <div className="w3-container">
        <h2>{profileObj.name}</h2>
      </div>

      <div className="w3-container">
        <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{profileObj.label}</p>
        <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{profileObj.location.city}, {profileObj.location.province}, {profileObj.location.countryCode}</p>
        <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i><a href="mailto:{profileObj.email}">{profileObj.email}</a></p>
      </div>

    </div>

  )
};

export default Profile;
