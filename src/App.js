import React, { PropTypes } from 'react';
import { About, Education, Footer, Header, Profile, Skills, Work } from './components'

const App = props => {

  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const skillsData = props.jsonObj.skills;
  const educationData = props.jsonObj.education;

  return (
    <div>
    <div clsssName="w3-container w3-margin-top page-wrapper">
      <Header />
      <div className="w3-row-padding">

        <Profile profileData={profileData} />
        <hr />
        <div className="w3-container w3-card-2 w3-white w3-margin-bottom">

          <About aboutData={aboutData} />
          <hr />
          <Work workData={workData} />
          <hr />
          <Skills skillsData={skillsData} />
          <hr />
          <Education educationData={educationData} />
        </div>
      </div>
    </div>
        <Footer profileData={profileData} />
        </div>
  );
};

App.propTypes = {
  jsonObj: PropTypes.object.isRequired
}

export default App;
