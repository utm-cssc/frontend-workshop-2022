import React from "react";
import { Container, Row, Col } from 'reactstrap';
import ProfileDetails from './ProfileDetails';
function Profile() {
  return (
    <div className="profile">
      <Row>
        <Col>
        {/* TODO: Here, (1) add your image to folder Assets, (2) import your image and (3) use it in the img tag below */}
          <img 
            src={""} 
            alt="Avatar"
            className="profileImage"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="name"> {/* TODO: Here, import your name constant and use it  */} </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProfileDetails />
        </Col>
      </Row>
    </div>
  );
}

export default Profile;