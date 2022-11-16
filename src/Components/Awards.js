import React from 'react';
import { AwardsObject } from '../constants';
import { UncontrolledCarousel } from 'reactstrap';

export default function Awards() {
    return (<div className="awards">
      <UncontrolledCarousel items={AwardsObject}/>
      </div>);
}