import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/product/ProductList";
import FullLayout from "./layouts/FullLayout";

// componets
import Test from "./pages/Test/Test";

//pages
// admin
import AdminSignin from "./pages/AdminSignin";
import AdminSignup from "./pages/AdminSignup";


//user management
import AddUser from "./pages/user/AddUser";
import UserList from "./pages/user/UserList";
import UpdateUser from "./pages/user/UpdateUser";
import SelectRoles from "./pages/user/SelectRoles";

//product list management
import AddProductList from "./pages/productlist/AddProductList";
import AllProductList from "./pages/productlist/AllProductList";
import ProductListDetails from "./pages/productlist/ProductListDetails";
import UpdateProductList from "./pages/productlist/UpdateProductList";

import "./css/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminSignin />}></Route>
        <Route path="/admin/signup" element={<AdminSignup />}></Route>

        <Route path="/admin" element={<FullLayout />}>
          <Route index element={<Dashboard />} />

          {/* user management */}
          <Route path="users" element={<UserList />}></Route>
          <Route path="users/roles" element={<SelectRoles />}></Route>
          <Route path="users/add" element={<AddUser />}></Route>
          <Route path="users/update/:id" element={<UpdateUser />}></Route>

          {/* product list management */}
          <Route path="product/list" element={<AllProductList />}></Route>
          <Route path="product/list/add" element={<AddProductList />}></Route>
          <Route path="product/list/update/:id" element={<UpdateProductList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

    //********* Test *********
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<AdminSignin />}></Route>
    //     <Route path="/admin/signup" element={<AdminSignup />}></Route>
    //     <Route path="/admin-select-role" element={<SelectRoles />}></Route>

    //     {/* uder management */}
    //     <Route path="/admin/users" element={<UserList />}></Route>
    //     <Route path="/admin/users/add" element={<AddUser />}></Route>
    //     <Route path="/admin/users/update" element={<UpdateUser />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
