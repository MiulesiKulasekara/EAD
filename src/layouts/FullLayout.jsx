import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";

const FullLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div className="shadow">
        <Header style={{ height: "60px" }} />
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        <div className="shadow">
          <Sidebar style={{ width: "250px", height: "100%" }} />
        </div>

        <Container fluid style={{ flex: 1, padding: "20px" }}>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default FullLayout;
