import React from "react";
import { Row, Col } from 'reactstrap';
import * as constants from '../constants';

export default function Component() {
  function renderContactFromObj(obj) {
    return (
      <Row>
        <Col xs={2} lg={1}>
          <img src={obj.icon} alt={obj.platform} style={{
            width: '25px',
            height: '25px'}}
          />
        </Col>
        <Col xs={4} lg={2}>
          {obj.platform}
        </Col>
        <Col xs={6} lg={9}>
          <a href={obj.profileLink}> {obj.profileLink} </a>
        </Col>
      </Row>
    )
  }
    return (<div className="contact">
      {constants.ContactLinksObj.map(x => renderContactFromObj(x))}
    </div>)
}