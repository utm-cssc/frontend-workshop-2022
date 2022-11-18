import React from "react";
import EducationComp from "../../Components/Education";
import * as constants from '../../constants';

export default function EducationPage() {
  return (
    <div className="education">
      {constants.EducationObject.map(x => <EducationComp item={x} />)}
    </div>
  );
}

