import { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Table } from "react-bootstrap";
import UserDetails from "./UserDetails";
import TablePagination from "../../componets/TablePagination";
import FormButton from "../../componets/FormButton";
import { users } from "../Test/Data";
import {
  ActiveStatus,
  InactiveStatus,
  PendingStatus,
} from "../../componets/UserStatus";
import { UserStatusEnum, RowsPerPageEnum } from "../../enums/Enum";

function UserList() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [paginatedUsers, setPaginatedUsers] = useState(
    users.slice(0, RowsPerPageEnum.MAX_TABLE_ROWS)
  );

  const rowsPerPage = RowsPerPageEnum.MAX_TABLE_ROWS;

  const handleRowClick = (user) => {
    if (selectedUser && selectedUser.id === user.id) {
      setSelectedUser(null);
    } else {
      setSelectedUser(user);
    }
  };

  const handlePageChange = (paginatedData) => {
    setPaginatedUsers(paginatedData);
  };

  return (
    <div className="p-4">
      <Row className="mb-2">
        <Col>
          <h2>All Users</h2>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col className="d-flex justify-content-end">
          <Link to="/admin/users/roles">
            <FormButton text="+ Add a user" type="submit"></FormButton>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Company Name</th>
                <th>Description</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr key={user.id}>
                  <td
                    onClick={() => handleRowClick(user)}
                    style={{ cursor: "pointer" }}
                  >
                    {user.id}
                  </td>
                  <td className="table-cell">{user.name}</td>
                  <td className="table-cell">{user.email}</td>
                  <td className="table-cell">{user.role}</td>
                  <td className="table-cell">
                    {user.status === UserStatusEnum.ACTIVE && <ActiveStatus />}
                    {user.status === UserStatusEnum.INACTIVE && (
                      <InactiveStatus />
                    )}
                    {user.status === UserStatusEnum.PENDING && (
                      <PendingStatus />
                    )}
                  </td>
                  <td className="table-cell">{user.companyName}</td>
                  <td className="table-cell">{user.description}</td>
                  <td>
                  <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => handleRowClick(user)}
                    >
                      <i className="bi bi-eye"></i>
                    </Button>{" "}
                    <Link
                      to={`/admin/users/update/${user.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="outline-secondary" size="sm">
                        <i className="bi bi-pencil"></i>
                      </Button>{" "}
                    </Link>
                    <Button variant="outline-danger" size="sm">
                      <i className="bi bi-trash3"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <TablePagination
            data={users}
            rowsPerPage={rowsPerPage}
            onPageChange={handlePageChange}
          />
        </Col>
      </Row>

      {selectedUser && (
        <Row className="">
          <Col>
            <UserDetails user={selectedUser} />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default UserList;
