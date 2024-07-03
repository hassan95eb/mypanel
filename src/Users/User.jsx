import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

export default function User() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get
  })
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between mt-2 bg-base py-2 px-3 rounded">
        <h2 className="fs-2 text-white">Users</h2>
        <Button variant="danger">Add User</Button>
      </div>
      <div className="table-users bg-base mt-3 py-2 px-3 rounded">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="custom-table">#</th>
              <th>Name</th>
              <th className="custom-table">User id</th>
              <th className="custom-table">Status</th>
              <th className="custom-table">Wallet</th>
              <th className="">E-mail</th>
              <th>Mobile</th>
              <th className="custom-table">Created</th>
              <th className="custom-table">Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
}
