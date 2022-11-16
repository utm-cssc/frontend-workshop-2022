import React, {useState} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Awards from './Awards';
import OSContrib from './OSContrib';
import Contact from './Contact';
import GitHubProjects from './GitHubProjects';

export default function CustomTabPane(props) {
  
  const [activeTab, setActiveTab] = useState('1');

  function toggle(tab) {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  }
    return (
      <div className="customTabPane">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              SKILLS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              EXPERIENCE
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              EDUCATION
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => { toggle('4'); }}
            >
              AWARDS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '5' })}
              onClick={() => { toggle('5'); }}
            >
              OPEN-SOURCE CONTRIBUTIONS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '6' })}
              onClick={() => { toggle('6'); }}
            >
              GITHUB PROJECTS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '7' })}
              onClick={() => { toggle('7'); }}
            >
              CONTACT
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col>
                <div className="jumbotron">
                  <Skills />
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col>
                <div className="jumbotron">
                  <Experience />
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col>
                <div className="jumbotron">
                  <Education />
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col>
                <div className="jumbotron">
                  <Awards />
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col>
                <div className="jumbotron">
                  <OSContrib />
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col>
                <div className="jumbotron">
                  <GitHubProjects />
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="7">
            <Row>
              <Col>
                <div className="jumbotron">
                  <Contact />
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
}