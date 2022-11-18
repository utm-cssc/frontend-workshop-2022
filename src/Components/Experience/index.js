import React from "react";
import { Row, Col } from 'reactstrap';

export default function ExperienceComp(props) {
  const { item } = props;
  return (
    <Row key={item.date}>
      <Col>
        <Row>
          <Col>
            <h3>{item.company}</h3>
          </Col>
          <Col>
            <h4> {item.role} </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <img
                  src={item.imageSrc}
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
                {item.date}
              </Col>
            </Row>
          </Col>
          <Col>
            <h5>{item.desc}</h5>
          </Col>
        </Row>
      </Col>
    </Row>)
}