import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/product/ProductList";
import FullLayout from "./layouts/FullLayout";

// componets
import Test from "./pages/Test/Test";

//pages
import AdminSignin from "./pages/AdminSignin";
import AdminSignup from "./pages/AdminSignup";
import SelectRoles from "./pages/Admin/SelectRoles";

import "./css/styles.css";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<FullLayout />}>
    //       <Route index element={<Dashboard />} />
    //       <Route path="product" element={<ProductList />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    //********* Test *********
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminSignin />}></Route>
        <Route path="/admin-signup" element={<AdminSignup />}></Route>
        <Route path="/admin-select-role" element={<SelectRoles />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
