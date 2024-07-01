import axios from "axios";
// import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

export default function User() {
  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   axios.get
  // })
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between mt-2 bg-base py-2 px-3 rounded">
        <h2 className="fs-2">Users</h2>
        <Button variant="danger">Add User</Button>
      </div>
      <div className="table-users bg-base mt-3 py-2 px-3 rounded">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name and Last Name</th>
              <th>User id</th>
              <th>Status</th>
              <th>Wallet</th>
              <th>E-mail</th>
              <th>Mobile</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
}
