import React from "react";
import ExperienceComp from "../../Components/Experience";
import * as constants from '../../constants';

export default function ExperiencePage() {
  return (
    <div className="experience">
      {constants.ExperienceObject.map(x => <ExperienceComp item={x} />)}
    </div>
  );
}