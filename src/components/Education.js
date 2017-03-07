import React from 'react';
import moment from 'moment';

const Education = props => {

  const getEducation = props.educationData.map((item, index) => {
    const startdate = moment([item.startDate]).year();
    const enddate = moment([item.endDate]).year();
    return (
      <div className="w3-container" key={index}>
        <h5 className="w3-opacity"><b>{item.studyType}  {item.area}</b></h5>
        <h6>{item.institution}</h6>
        <p>Studied: {startdate} - {enddate}</p>
      </div>
    )
  });

  return (

    <div className="w3-container w3-card-2 w3-white">
      <h3 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h3>
      {getEducation}
    </div>
  )
};

export default Education;
