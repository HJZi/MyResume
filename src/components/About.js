import React from 'react';

const About = props => {


const getAbout = props.aboutData.map((item, index) => {

  return (
    <div key={index}>
    <p>{item}</p>
    </div>
  )
})

  return (
      <div className="w3-container">
      <h3 className="w3-text-grey w3-padding-16"><i className="fa fa-files-o fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>About</h3>
      {getAbout}
    </div>
  );
};

export default About;
