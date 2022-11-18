import React from "react";
import { Container} from 'reactstrap';
import Homepage from "./pages/Home";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Container fluid>
      <Homepage />
    </Container>
  );
}

export default App;
