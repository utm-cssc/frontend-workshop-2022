import { Table } from 'reactstrap';
import React from "react";
import * as constants from '../constants';

export default function OSContrib() {
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
    return (<div className="osContrib">
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
    </div>);
}