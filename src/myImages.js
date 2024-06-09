import React from 'react';
import HeaderImage from './Images/Header.png';
import AssessmentImage from './Images/AssessmentCriteria.png';
import InstructionsImage from './Images/InstructionsAndRequirements.png';

const MyImages = () => {
  return (
    <div>
      <img src={HeaderImage} alt="Header" />
      <img src={AssessmentImage} alt="Assessment Criteria" />
      <img src={InstructionsImage} alt="Instructions and Requirements" />
    </div>
  );
}

export default MyImages;
