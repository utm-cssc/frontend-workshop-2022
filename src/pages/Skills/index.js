import React from 'react';
import { Progress, Row, Col } from 'reactstrap';
import * as constants from '../../constants';

import "./index.css";

function renderProgressOnSkills(skills) {
  return skills.map(element => {
    return (
      <Row key={element.language}>
        <Col xs={3}>
          {element.language}
        </Col>
        <Col xs={9}>
          <Progress value={element.progress}>
            {element.progress}
          </Progress>
        </Col>
      </Row>)
  })
}

function renderFrameworks(fs) {
  return fs.map(element => {
    return (
      <Row key={element.language}>
        <Col xs={3}>
          {element.language}
        </Col>
        <Col xs={9}>
          {element.frameworks}
        </Col>
      </Row>
    )
  });
}

function renderGeneric(arr) {
  return (
    <Row>
      <Col>
        {arr.join(", ").concat(".")}
      </Col>
    </Row>
  );
}


export default function SkillPage() {
  return (
    <div className="skills">
      {/* // TODO: The code below is a bit repetitive. Can you implement the SkillProgress component and reuse it here? You can move the function above to your component if needed. */}
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Programming Languages </h3>
            </Col>
          </Row>
          {renderProgressOnSkills(constants.ProgrammingSkills)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> MarkUp Languages </h3>
            </Col>
          </Row>
          {renderProgressOnSkills(constants.MarkUpSkills)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Frameworks </h3>
            </Col>
          </Row>
          {renderFrameworks(constants.Frameworks)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Test-Frameworks </h3>
            </Col>
          </Row>
          {renderFrameworks(constants.TestFrameworks)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <h3> Tools </h3>
            </Col>
          </Row>
          {renderGeneric(constants.Tools)}
        </Col>
      </Row>
    </div>
  );
}