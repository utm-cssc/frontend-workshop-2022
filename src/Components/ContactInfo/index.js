import React from "react";
import { Row, Col } from 'reactstrap';

export default function ContactInfo(props) {
  return (
    <Row>
      <Col xs={2} lg={1}>
        <img 
          src="" // TODO: Use value passed by props here to render your image!
          alt="" // TODO: Use value passed by props here to render your alt (should be your platform name)!
          style={{
          width: '25px',
          height: '25px'
        }}
        />
      </Col>
      <Col xs={4} lg={2}>
        [TODO]
        {/* // TODO: Use value passed by props here to render your platform name! */}
      </Col>
      <Col xs={6} lg={9}>
        <a
          href="#"  // TODO: Use value passed by props here to link to your platform url!
        >
          {/* // TODO: Use value passed by props here to display your platform url! */}
        </a>
      </Col>
    </Row>
  )
}