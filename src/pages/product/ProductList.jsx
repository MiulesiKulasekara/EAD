import { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Table } from "react-bootstrap";
import ProductDetails from "./ProductDetails";
import TablePagination from "../../componets/TablePagination";
import FormButton from "../../componets/FormButton";
import { product } from "../Test/Data";
import { RowsPerPageEnum } from "../../enums/Enum";

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paginatedProduct, setPaginatedProduct] = useState(
    product.slice(0, RowsPerPageEnum.MAX_TABLE_ROWS)
  );

  const rowsPerPage = RowsPerPageEnum.MAX_TABLE_ROWS;

  const handleRowClick = (product) => {
    if (selectedProduct && selectedProduct.id === product.id) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(product);
    }
  };

  const handlePageChange = (paginatedData) => {
    setPaginatedProduct(paginatedData);
  };

  return (
    <div className="p-4">
      <Row className="mb-2">
        <Col>
          <h2>All Products</h2>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col className="d-flex justify-content-end">
          <Link to="/admin/product/add">
            <FormButton text="+ Add a Product" type="submit"></FormButton>
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
                <th>price</th>
                <th>Quantity</th>
                <th>Vendor</th>
                <th>Material</th>
                <th>Description</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProduct.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td className="table-cell">{product.name}</td>
                  <td className="table-cell">{product.price}</td>
                  <td className="table-cell">{product.stockQuantity}</td>
                  <td className="table-cell">{product.vendorId}</td>
                  <td className="table-cell">{product.material}</td>
                  <td className="table-cell">{product.description}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => handleRowClick(product)}
                    >
                      <i className="bi bi-eye"></i>
                    </Button>{" "}
                    <Link
                      to={`/admin/product/update/${product.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="outline-secondary" size="sm">
                        <i className="bi bi-pencil"></i>
                      </Button>
                    </Link>{" "}
                    <Button variant="outline-danger" size="sm">
                      <i className="bi bi-trash3"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <TablePagination
            data={product}
            rowsPerPage={rowsPerPage}
            onPageChange={handlePageChange}
          />
        </Col>
      </Row>

      {selectedProduct && (
        <Row>
          <Col>
            <ProductDetails product={selectedProduct} />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductList;
