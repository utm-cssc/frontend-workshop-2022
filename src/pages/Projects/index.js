import React from "react";
import { Table } from 'reactstrap';
import * as constants from '../../constants';

// TODO: This page seems to be repetitive with OSContrib page. Can you instead create a generic component with table, then use it in both page?

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

export default function ProjectPage() {
  return (
    <div>
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
    </div>
  );
}