import { Button, Nav, NavItem, NavbarBrand } from "reactstrap";
import { useState, useEffect } from "react";
//import probg from "../assets/images/bg/download.jpg";
import logo from "../assets/images/logos/colorLogo/1.png";
import { Link, useLocation } from "react-router-dom";

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
        location.pathname === "/product"
        // ||
        // location.pathname === "/dashboard/add-employee" ||
        // location.pathname === `/dashboard/view-employee/${id}` ||
        // location.pathname === `/dashboard/update-employee/${id}`
      ) {
        setActiveItem("product");
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
              to={"/"}
              className={`cursor-pointer p-2 d-flex align-items-center text-decoration-none ${
                activeItem === "dashboard" ? "side-bar-item-txt" : "side-bar-item-txt-none"
              }`}
              onClick={() => handleItemClick("dashboard")}
            >
              <i className="bi bi-speedometer2 ms-4"></i>
              <span className="ms-3 d-inline-block">Dashboard</span>
            </Link>
          </NavItem>

          <NavItem
            className={`cursor-pointer ${
              activeItem === "product"
                ? "sidenav-bg mb-4 sidebar-item-bg"
                : "sidenav-bg mb-4"
            }`}
          >
            <Link
              to={"/product"}
              className={`cursor-pointer p-2 d-flex align-items-center text-decoration-none ${
                activeItem === "product" ? "side-bar-item-txt" : "side-bar-item-txt-none"
              }`}
              onClick={() => handleItemClick("product")}
            >
              <i className="bi bi-box-seam ms-4"></i>
              <span className="ms-3 d-inline-block">Product</span>
            </Link>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
