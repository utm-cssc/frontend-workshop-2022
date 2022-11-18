import { Table } from 'reactstrap';
import React from "react";
import * as constants from '../../constants';

// TODO: This page seems to be repetitive with Project page. Can you instead create a generic component with table, then use it in both page?

function renderTableRows(obj) {
  return obj.map(x => {
    return (
      <tr>
        <th> <a href={x.repoLink}> {x.repoName} </a> </th>
        <th> <a href={x.pullRequest}> {x.pullRequest} </a></th>
        <th> {x.status} </th>
      </tr>
    );
  })
}

export default function ContributionPage() {
    return (
      <div>
        <Table bordered>
          <thead>
            <tr>
              <th>Repository</th>
              <th>Pull Requests</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows(constants.PRObject)}
          </tbody>
        </Table>
      </div>
    );
}