import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { UserRoleConstant } from "../../Constants/Constants";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";

// roles
const roles = [
  {
    title: "Admin",
    imageUrl: user3,
    roleNum: UserRoleConstant.ADMIN,
  },
  {
    title: "CSR",
    imageUrl: user4,
    roleNum: UserRoleConstant.CSR,
  },
  {
    title: "Vender",
    imageUrl: user2,
    roleNum: UserRoleConstant.VENDOR,
  },
  {
    title: "Customer",
    imageUrl: user1,
    roleNum: UserRoleConstant.CUSTOMER,
  },
];

const SelectRoles = () => {
  const [focusedRole, setFocusedRole] = useState(null);

  const navigate = useNavigate();

  const handleCardClick = (roleNum) => {
    navigate("/admin/users/add", { state: { roleNum } });
  };

  const focusedStyle = {
    boxShadow: "0 0 0 0.2rem rgba(125, 157, 156, 0.5)",
    borderColor: "#7D9D9C",
  };

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center max-vh-100"
      style={{ paddingLeft: "" }}
    >
      <div className="">
        <h3 className="mb-4">Select user role</h3>
      </div>
      <Row className="w-100 d-flex" style={{ paddingLeft: "130px" , marginTop: "100px" }}>
        {roles.map((role, index) => (
          <Col key={index} sm={12} md={6} lg={3} className="mb-4">
            <Card
              className="h-100 text-center"
              style={focusedRole === role.roleNum ? focusedStyle : {}}
              onClick={() => handleCardClick(role.roleNum)}
              onMouseEnter={() => setFocusedRole(role.roleNum)}
              onMouseLeave={() => setFocusedRole(null)}
            >
              <Card.Img variant="top" src={role.imageUrl} />
              <Card.Body>
                <Card.Title>{role.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SelectRoles;
