import React from "react";
import { Table } from 'reactstrap';
import * as constants from '../constants';

export default function GitHubProjects() {
  function renderTableRows(obj) {
    return obj.map(x => {
      return (
        <tr>
          <td> {x.projectName} </td>
          <td> <a href={x.projectLink}> {x.projectLink} </a> </td>
          <td> {x.languages} </td>
        </tr>
      );
    })
  }
    return (<div className="githubProjects">
      <Table bordered>
        <thead>
          <tr>
            <td>Name</td>
            <td>Link</td>
            <td>Programming Language</td>
          </tr>
        </thead>
        <tbody>
          {renderTableRows(constants.GithubProjects)}
        </tbody>
      </Table>
    </div>);
}