import React from 'react';
import moment from 'moment';

const WorkItem = props => {

const workItems = props.workItemData;

const getWorkDates = () => {
  const startdate = moment([workItems.startDate]).year();
  let enddate = null;
  if (workItems.endDate !== 'current') {
    enddate = moment([workItems.endDate]).year();
  } else {
    enddate = 'Current'
  }

  return <span>{startdate} - {enddate}</span>
}

const getHightlights = workItems.highlights.map((item, index) => {
return (
  <li key={index}>{item}</li>
)
})
return (
  <div className="w3-container">
  <h5 className="w3-opacity"><b>{workItems.position} ,   {props.workItemData.company}</b></h5>
  <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i><span className="w3-tag w3-teal w3-round">{getWorkDates()}</span></h6>

  <p>{workItems.summary}</p>
  <ul>{getHightlights}</ul>
  </div>
)
};
export default WorkItem;
