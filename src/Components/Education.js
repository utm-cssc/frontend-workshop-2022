import React from "react";
import { Row, Col } from 'reactstrap';
import * as constants from './../constants';

export default function Education() {

  function renderEducation(obj) {
    return (
      <Row>
        <Col>
          <Row>
            <Col>
              <h3>{obj.college}</h3>
            </Col>
            <Col>
              <h4> {obj.role} </h4>
            </Col>
          </Row>
          <Row>
            <Col>
            {obj.date}
              </Col>
            <Col>
              <h5>{obj.desc}</h5>
            </Col>
          </Row>
        </Col>
      </Row>)
  }
    return (
      <div className="education">
        {constants.EducationObject.map(x => renderEducation(x))}
      </div>);
}

