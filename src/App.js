import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Profile from './Components/Profile';
import CustomTabPane from './Components/CustomTabPane'

import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Container fluid>
      <Row>
          <Col lg={3}><Profile /></Col>
          <Col lg={9}><CustomTabPane /></Col>
      </Row>
    </Container>
  );
}

export default App;
