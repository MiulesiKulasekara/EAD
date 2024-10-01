import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/product/ProductList";
import FullLayout from "./layouts/FullLayout";

// componets
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import "./css/styles.css";
import FormInput from "./componets/FormInput";
import Test from "./pages/Test/Test";

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
        <Route path="/" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
