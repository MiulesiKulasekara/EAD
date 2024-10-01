import { Nav, NavItem, NavbarBrand } from "reactstrap";
import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

// const navigation = [
//   {
//     title: "Dashboard",
//     href: "/",
//     icon: "bi bi-speedometer2",
//   },
//   {
//     title: "Product",
//     href: "/product",
//     icon: "bi bi-box-seam",
//   },
// ];

const Sidebar = () => {
  const { id } = useParams();

  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  let location = useLocation();

  const [activeItem, setActiveItem] = useState("dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const getActiveItem = (location) => {
      if (location.pathname === "/dashboard") {
        setActiveItem("dashboard");
      }
      if (
        location.pathname === "/admin/users" ||
        location.pathname === "/admin/users/add" ||
        location.pathname === "/admin/users/roles" ||
        location.pathname === `/admin/users/update//${id}`
      ) {
        setActiveItem("users");
      }
    };
    getActiveItem(location);
  }, [location, activeItem]);

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div className="sidebarNav admin-side-bar">
        <Nav vertical className="sidebarNav mt-4">
          <NavItem
            className={`cursor-pointer ${
              activeItem === "dashboard"
                ? "sidenav-bg mb-4 sidebar-item-bg"
                : "sidenav-bg mb-4"
            }`}
          >
            <Link
              to={"/admin"}
              className={`cursor-pointer p-2 d-flex align-items-center text-decoration-none ${
                activeItem === "dashboard"
                  ? "side-bar-item-txt"
                  : "side-bar-item-txt-none"
              }`}
              onClick={() => handleItemClick("dashboard")}
            >
              <i className="bi bi-speedometer2 ms-4"></i>
              <span className="ms-3 d-inline-block">Dashboard</span>
            </Link>
          </NavItem>

          <NavItem
            className={`cursor-pointer ${
              activeItem === "users"
                ? "sidenav-bg mb-4 sidebar-item-bg"
                : "sidenav-bg mb-4"
            }`}
          >
            <Link
              to={"/admin/users"}
              className={`cursor-pointer p-2 d-flex align-items-center text-decoration-none ${
                activeItem === "users"
                  ? "side-bar-item-txt"
                  : "side-bar-item-txt-none"
              }`}
              onClick={() => handleItemClick("users")}
            >
              <i className="bi bi-people ms-4"></i>
              <span className="ms-3 d-inline-block">Users</span>
            </Link>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
