import React from "react";
import HeaderImage from  ".Header.png";
import AssessmentImage from  ".AssessmentCriteria.png";
import InstructionsImage from  ".InstructionsAndRequirements.png";

const Image = () => {
    let imageType;

    if (e.target.value === 'InstructionsImage'){
        imageType = InstructionsImage;
    } 
    else if (e.target.value === 'HeaderImage') {
        imageType = HeaderImage;
    } 
    else if (e.target.value === 'AssessmentImage') {
        imageType = AssessmentImage;
    }

    return (
        <div>
            <img src={imageType} alt="" />
        </div>
    )
}

export default Image;