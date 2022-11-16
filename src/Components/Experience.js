import React from "react";
import { Row, Col } from 'reactstrap';
import * as constants from './../constants'

export default function Experience() {
  function renderExperienceProf(obj) {
    return (
      <Row key={obj.date}>
        <Col>
          <Row>
            <Col>
              <h3>{obj.company}</h3>
            </Col>
            <Col>
              <h4> {obj.role} </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col>
                  <img
                    src={obj.imageSrc}
                    alt="companyImage"
                    style={
                      {
                        width: '30%',
                        marginTop: '2%',
                        marginBottom: '2%'
                      }
                    } />
                </Col>
              </Row>
              <Row>
                <Col>
                  {obj.date}
                </Col>
              </Row>
            </Col>
            <Col>
              <h5>{obj.desc}</h5>
            </Col>
          </Row>
        </Col>
      </Row>)
  }
    return (
      <div className="experience">
        {constants.ExperienceObject.map(x => renderExperienceProf(x))}
      </div>);
}