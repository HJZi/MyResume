import React from 'react';

const Skills = props => {

  const getSkills = props.skillsData.map((item, index) => {
    const category = item.name;
    let skills = [];

    item.keywords.forEach((val, index) => {
      skills.push(
        <li key={index}><span  className="w3-tag w3-teal"> {val} </span></li>
      );
    });


    return (
      <div key={index}>
        <h6 className="w3-opacity"><b>{category} :</b></h6>
        <ul className="w3-small" >
          {skills}
        </ul>
      </div>
    )
  });

  return (
    <div className="w3-container skills">
      <h3 className="w3-text-grey w3-padding-16"><i className="fa fa-code fa-fw w3-margin-right w3-text-teal"></i>Skills</h3>

        {getSkills}

    </div>
  )
};

export default Skills;
