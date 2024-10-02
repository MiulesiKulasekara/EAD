import { Row, Col, Card } from "react-bootstrap";
import { UserStatusEnum } from "../../enums/Enum";
import {
  ActiveStatus,
  InactiveStatus,
  PendingStatus,
} from "../../componets/UserStatus";

function UserDetails({ user }) {
  return (
    <Card className="mt-2">
      <Card.Body>
        <Row>
          <Col>
            <h2>{user.name}</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h5>Email</h5>
            <p>{user.email}</p>
          </Col>
          <Col md={4}>
            <h5>Role</h5>
            <p>{user.role}</p>
          </Col>
          <Col md={1}>
            <h5>Status</h5>
            <p>
              {user.status === UserStatusEnum.ACTIVE && <ActiveStatus />}
              {user.status === UserStatusEnum.INACTIVE && <InactiveStatus />}
              {user.status === UserStatusEnum.PENDING && <PendingStatus />}
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default UserDetails;
