import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Skills from '../Skills';
import Experience from '../Experience';
import Education from '../Education';
import Awards from '../Awards';
import OSContrib from '../OSContrib';
import Contact from '../Contact';
import GitHubProjects from '../Projects';
import Introduction from '../../Components/Intro';

import "./index.css";

function ContentPane(props) {
  const { activeTab } = props;
  return (
    <div style={{ width: '-webkit-fill-available' }}>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="0">
          <div className="jumbotron">
            <Skills />
          </div>
        </TabPane>
        <TabPane tabId="1">
          <div className="jumbotron">
            <Experience />
          </div>
        </TabPane>
        <TabPane tabId="2">
          <div className="jumbotron">
            <Education />
          </div>
        </TabPane>
        <TabPane tabId="3">
          <div className="jumbotron">
            <Awards />
          </div>
        </TabPane>
        <TabPane tabId="4">
          <div className="jumbotron">
            <OSContrib />
          </div>
        </TabPane>
        <TabPane tabId="5">
          <div className="jumbotron">
            <GitHubProjects />
          </div>
        </TabPane>
        <TabPane tabId="6">
          <div className="jumbotron">
            <Contact />
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default function HomePage() {
  const tabs = [
    "SKILLS",
    "EXPERIENCE",
    "EDUCATION",
    "AWARDS",
    "OPEN-SOURCE CONTRIBUTIONS",
    "GITHUB PROJECTS",
    "CONTACT",
  ]
  return (
    <div className="container">
      <Introduction />
      <Nav tabs>
        {tabs.map((e, i) => {
          return (
            <NavItem>
              <NavLink
                // className={classnames({ active: [TODO: replace this bracket with your active tab state, and then uncomment this line] === '1' })}
                onClick={() => { }} // TODO: Set the tab state to be the string value of i (the index is the tab id)
              >
                {e}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
      {/* // TODO: Uncomment the line below and pass the active tab state to ContentPane component!*/}
      {/* <ContentPane activeTab={} /> */}

      {/* // TODO: Add your footer component here! */}
    </div>
  );
}