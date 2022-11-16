import { Table } from 'reactstrap';
import React from "react";
export default function ProfileDetails() {
  return (<Table borderless>
    <tbody>
      <tr>
        <td>Call</td>
        <td>{/* TODO: Here, import your phone number constant and use it  */}</td>
      </tr>
      <tr>
        <td>Mail</td>
        <td>{/* TODO: Here, import your email constant and use it  */}</td>
      </tr>
      <tr>
        <td>Address</td>
        <td>{/* TODO: Here, import your address constant and use it  */}</td>
      </tr>
    </tbody>
  </Table>
  )
}