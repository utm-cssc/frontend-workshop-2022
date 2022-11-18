import React from "react";
import { Row, Col } from 'reactstrap';

export default function EducationComp(props) {
  const { item } = props;
  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <h3>{item.college}</h3>
          </Col>
          <Col>
            <h4> {item.role} </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            {item.date}
          </Col>
          <Col>
            <h5>{item.desc}</h5>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}