import React from 'react';
import WorkItem from './WorkItem';

const Work = props => {

const workExperiences = props.workData;
  const getWorkExperience = () => {
    const workItems = [];
    workExperiences.forEach((val, index) => {
      workItems.push(
        <WorkItem key={index} workItemData={val} />
      );
    })
    return workItems;
  }
  return (
  <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
        <h3 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h3>

   {getWorkExperience()}
   </div>
  )
};

export default Work;
